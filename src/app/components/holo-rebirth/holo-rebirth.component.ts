import {
  Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { DataService } from '../../services/data.service';
import { NarrativeService } from '../../services/narrative.service';
import { I18nService } from '../../services/i18n.service';
import { WindowsService } from '../../services/windows.service';
import { Project } from '../../models/portfolio.models';
import {
  CORE_VERT, CORE_FRAG, AIR_VERT, AIR_FRAG,
  RING_VERT, RING_FRAG, BEAM_VERT, BEAM_FRAG
} from './planet.glsl';

/** Cuanto puede moverse el puntero y seguir contando como toque y no arrastre. */
const TAP_PX = 8;
/** Tope de densidad: a DPR 3 sin tope son ~11 Mpx por cuadro. */
const MAX_DPR = 2;
/** El bloom se resuelve a menor densidad: es el paso mas caro y no se nota. */
const BLOOM_DPR = 1.25;
const R = 9.4;

const C_LIVE = 0x46d98a;
const C_WORK = 0x5fa8ff;
const C_ARCH = 0x9aa4b2;
const C_SIGNAL = 0xffb259;

@Component({
  selector: 'app-holo-rebirth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holo-rebirth.component.html',
  styleUrls: ['./holo-rebirth.component.css']
})
export class HoloRebirthComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasHost') canvasHost!: ElementRef<HTMLElement>;

  private data = inject(DataService);
  private narrative = inject(NarrativeService);
  private wm = inject(WindowsService);
  public i18n = inject(I18nService);

  hovered = signal<string | null>(null);

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private composer?: EffectComposer;
  private bloom?: UnrealBloomPass;
  private controls!: OrbitControls;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();

  private world = new THREE.Group();
  private markers: THREE.Group[] = [];
  private rings: THREE.Mesh[] = [];
  /** Todos los uniforms con uTime, para actualizarlos en un solo lugar. */
  private clocks: THREE.IUniform[] = [];
  private core!: Record<string, THREE.IUniform>;

  private hoverGroup: THREE.Group | null = null;
  private downAt: { x: number; y: number } | null = null;
  private frame = 0;
  private clock = new THREE.Clock();
  private reduced = false;
  private onResize = () => this.resize();

  ngAfterViewInit() {
    this.reduced = this.narrative.prefersReducedMotion();
    try {
      this.init();
      this.buildPlanet();
      this.buildRings();
      this.buildMarkers();
      this.animate();
      window.addEventListener('resize', this.onResize);
    } catch {
      // Sin contexto 3D no se deja al visitante en una pantalla muerta.
      this.exit();
    }
  }

  // =======================================================================
  private init() {
    const host = this.canvasHost.nativeElement;
    const w = host.clientWidth || window.innerWidth;
    const h = host.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio, MAX_DPR);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
    this.camera.position.set(0, 7, 34);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,        // con el bloom bajo, el MSAA es lo que da el filo
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(dpr);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.92;
    host.appendChild(this.renderer.domElement);

    // ---- Bloom: es lo que convierte una linea brillante en luz ----------
    try {
      this.composer = new EffectComposer(this.renderer);
      this.composer.setPixelRatio(Math.min(dpr, BLOOM_DPR));
      this.composer.setSize(w, h);
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.34, 0.48, 0.86);
      this.composer.addPass(this.bloom);
      this.composer.addPass(new OutputPass());
    } catch {
      // Sin post-procesado se dibuja igual, solo que mas apagado.
      this.composer = undefined;
    }

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    // Amortiguacion baja: al soltar sigue girando y frena solo, con inercia.
    this.controls.dampingFactor = 0.045;
    this.controls['rotateSpeed'] = 0.55;
    this.controls.enablePan = false;
    this.controls.minDistance = 17;
    this.controls.maxDistance = 62;
    this.controls.autoRotate = !this.reduced;
    this.controls.autoRotateSpeed = 0.32;

    this.scene.add(this.world);
    this.buildStars();
  }

  private buildStars() {
    const n = 2600;
    const pos = new Float32Array(n * 3);
    const size = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      // Repartidas en una cascara, no en un cubo: no hay estrellas cerca.
      const r = 95 + Math.random() * 150;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.cos(ph);
      pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
      size[i] = Math.random() < 0.05 ? 1.9 : 0.68;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));

    const u = { uTime: { value: 0 } };
    this.clocks.push(u.uTime);
    this.scene.add(new THREE.Points(g, new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: u,
      vertexShader: `
        attribute float aSize; varying float vT;
        void main() {
          vT = fract(sin(position.x * 12.9898 + position.z * 78.233) * 43758.5453);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying float vT; uniform float uTime;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float tw = 0.6 + 0.4 * sin(uTime * 0.7 + vT * 6.283);
          gl_FragColor = vec4(vec3(0.82, 0.87, 0.97), (1.0 - d * 2.0) * tw * 0.8);
        }`
    })));
  }

  private buildPlanet() {
    this.core = {
      uTime: { value: 0 },
      uHit: { value: new THREE.Vector3() },
      uHitAt: { value: -100 }
    };
    this.clocks.push(this.core['uTime']);

    // --- Nucleo con bandas de energia -------------------------------------
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(R, 64),
      new THREE.ShaderMaterial({
        uniforms: this.core,
        vertexShader: CORE_VERT,
        fragmentShader: CORE_FRAG
      })
    );
    core.name = 'CORE';
    this.world.add(core);

    // --- Reticula ----------------------------------------------------------
    this.world.add(new THREE.LineSegments(
      this.graticule(R * 1.0025, 18, 12),
      new THREE.LineBasicMaterial({
        color: 0x7d90a6, transparent: true, opacity: 0.20,
        blending: THREE.AdditiveBlending, depthWrite: false
      })
    ));

    // --- Atmosfera ---------------------------------------------------------
    const airU = { uTime: { value: 0 } };
    this.clocks.push(airU.uTime);
    this.world.add(new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.09, 96, 64),
      new THREE.ShaderMaterial({
        uniforms: airU,
        vertexShader: AIR_VERT,
        fragmentShader: AIR_FRAG,
        transparent: true,
        side: THREE.BackSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    ));
  }

  /** Anillos orbitales inclinados, cada uno con su destello recorriendolo. */
  private buildRings() {
    const specs: [number, number, number, number][] = [
      // radio, inclinacion X, inclinacion Z, velocidad del destello
      [R * 1.55, 1.16, 0.22, 0.09],
      [R * 1.92, 0.72, -0.42, -0.06],
      [R * 2.45, 1.42, 0.58, 0.04]
    ];
    const cols = [0x9fb4c8, 0x7f97ad, 0x9fb4c8];

    specs.forEach(([rad, rx, rz, speed], i) => {
      const u = {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(cols[i]) },
        uSpeed: { value: speed }
      };
      this.clocks.push(u.uTime);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(rad, 0.014, 3, 320),
        new THREE.ShaderMaterial({
          uniforms: u,
          vertexShader: RING_VERT,
          fragmentShader: RING_FRAG,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      );
      ring.rotation.set(rx, 0, rz);
      this.rings.push(ring);
      this.world.add(ring);
    });
  }

  /** Meridianos y paralelos como segmentos: mas barato que N circulos. */
  private graticule(r: number, meridians: number, parallels: number): THREE.BufferGeometry {
    const pts: number[] = [];
    const STEP = 64;
    for (let m = 0; m < meridians; m++) {
      const lon = (m / meridians) * Math.PI * 2;
      for (let i = 0; i < STEP; i++) {
        for (const t of [i, i + 1]) {
          const lat = (t / STEP) * Math.PI - Math.PI / 2;
          pts.push(r * Math.cos(lat) * Math.cos(lon), r * Math.sin(lat), r * Math.cos(lat) * Math.sin(lon));
        }
      }
    }
    for (let p = 1; p < parallels; p++) {
      const lat = (p / parallels) * Math.PI - Math.PI / 2;
      const rr = r * Math.cos(lat), y = r * Math.sin(lat);
      for (let i = 0; i < STEP; i++) {
        for (const t of [i, i + 1]) {
          const lon = (t / STEP) * Math.PI * 2;
          pts.push(rr * Math.cos(lon), y, rr * Math.sin(lon));
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }

  // =======================================================================
  private buildMarkers() {
    const projects = this.data.projects();
    const coords = this.fibonacci(projects.length);
    projects.forEach((p, i) => {
      const color =
        p.status === 'PRODUCTION' || p.status === 'DELIVERED' ? C_LIVE
          : p.status === 'PROTOTYPE' || p.status === 'ARCHIVED' ? C_ARCH
            : C_WORK;
      this.markers.push(this.beacon(coords[i].lat, coords[i].lon, p, color, i));
    });
  }

  /** Espiral de Fibonacci: reparte N puntos parejo sobre la esfera. */
  private fibonacci(n: number) {
    if (n === 1) return [{ lat: 12, lon: 0 }];
    const golden = Math.PI * (3 - Math.sqrt(5));
    const out: { lat: number; lon: number }[] = [];
    for (let i = 0; i < n; i++) {
      const y = 1 - ((i + 0.5) / n) * 2;
      const lat = Math.asin(Math.max(-1, Math.min(1, y))) * (180 / Math.PI);
      const lon = ((golden * i * (180 / Math.PI)) % 360) - 180;
      out.push({ lat: lat * 0.8, lon });
    }
    return out;
  }

  /**
   * Marcador de proyecto: una reticula de instrumento.
   *
   * Antes era un octaedro brillante que se leia como objeto de videojuego.
   * Ahora es un mastil finisimo, un anillo palido y un nucleo minusculo en el
   * color del estado: el color aparece en un punto, no en todo el nodo.
   */
  private beacon(lat: number, lon: number, project: Project, hex: number, seed: number) {
    const g = new THREE.Group();
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const pos = new THREE.Vector3(
      -(R * Math.sin(phi) * Math.cos(theta)),
      R * Math.cos(phi),
      R * Math.sin(phi) * Math.sin(theta)
    );
    g.position.copy(pos);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());

    const col = new THREE.Color(hex);
    const pale = new THREE.Color(0x9fb1c4);
    const TOP = 1.95;

    // Mastil
    const beamU = {
      uTime: { value: 0 },
      uColor: { value: pale.clone() },
      uSeed: { value: seed * 1.7 }
    };
    this.clocks.push(beamU.uTime);
    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.014, 0.030, TOP, 6, 1, true),
      new THREE.ShaderMaterial({
        uniforms: beamU,
        vertexShader: BEAM_VERT,
        fragmentShader: BEAM_FRAG,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      })
    );
    stalk.position.y = TOP / 2;
    stalk.name = 'BEAM';
    g.add(stalk);

    // Anillo de reticula
    const head = new THREE.Mesh(
      new THREE.TorusGeometry(0.31, 0.014, 3, 44),
      new THREE.MeshBasicMaterial({ color: pale, transparent: true, opacity: 0.85 })
    );
    head.position.y = TOP;
    head.rotation.x = Math.PI / 2;
    head.name = 'HEAD';
    g.add(head);

    // Nucleo: el unico lugar donde aparece el color del estado.
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.085, 14, 12),
      new THREE.MeshBasicMaterial({ color: col })
    );
    core.position.y = TOP;
    core.name = 'SPARK';
    g.add(core);

    // Marca de anclaje sobre la superficie
    const pad = new THREE.Mesh(
      new THREE.RingGeometry(0.24, 0.275, 36),
      new THREE.MeshBasicMaterial({
        color: pale, side: THREE.DoubleSide, transparent: true,
        opacity: 0.55, depthWrite: false
      })
    );
    pad.rotation.x = Math.PI / 2;
    pad.position.y = 0.03;
    pad.name = 'PAD';
    g.add(pad);

    g.userData = { isMarker: true, project, base: hex };
    this.world.add(g);
    return g;
  }

  // =======================================================================
  private pick(cx: number, cy: number): THREE.Group | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((cx - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((cy - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);

    const hits = this.raycaster.intersectObjects(this.world.children, true);
    for (const h of hits) {
      let o: THREE.Object3D | null = h.object;
      while (o && o !== this.world) {
        if (o.userData?.['isMarker']) return o as THREE.Group;
        o = o.parent;
      }
    }
    return null;
  }

  onPointerMove(e: PointerEvent) {
    if (e.pointerType === 'touch') return;
    const found = this.pick(e.clientX, e.clientY);
    if (found === this.hoverGroup) return;

    if (this.hoverGroup) this.mark(this.hoverGroup, this.hoverGroup.userData['base'], 1);
    if (found) this.mark(found, C_SIGNAL, 1.75);

    this.hoverGroup = found;
    this.hovered.set(found ? (found.userData['project'] as Project).name : null);
  }

  /** Al pasar por encima el nodo no solo cambia de color: crece. */
  private mark(g: THREE.Group, hex: number, scale: number) {
    const on = scale > 1;
    g.traverse(c => {
      if (!(c instanceof THREE.Mesh)) return;
      const m = c.material as THREE.MeshBasicMaterial;
      if (c.name === 'HEAD') {
        m.color.setHex(on ? hex : 0x9fb1c4);
        m.opacity = on ? 1 : 0.85;
        c.scale.setScalar(scale);
      } else if (c.name === 'PAD') {
        m.opacity = on ? 0.85 : 0.42;
        c.scale.setScalar(scale);
      } else if (c.name === 'SPARK') {
        c.scale.setScalar(on ? 1.5 : 1);
      }
    });
  }

  onPointerDown(e: PointerEvent) {
    this.downAt = { x: e.clientX, y: e.clientY };
  }

  /** La accion va al soltar y solo si casi no se movio: arrastrar rota. */
  onPointerUp(e: PointerEvent) {
    const start = this.downAt;
    this.downAt = null;
    if (!start) return;
    if (Math.hypot(e.clientX - start.x, e.clientY - start.y) > TAP_PX) return;

    const marker = this.pick(e.clientX, e.clientY);
    if (marker) {
      this.controls.autoRotate = false;
      this.wm.open(marker.userData['project'] as Project);
      return;
    }

    const hit = this.raycaster.intersectObjects(this.world.children, true)
      .find(h => h.object.name === 'CORE');
    if (hit && this.core) {
      const local = hit.point.clone().applyMatrix4(hit.object.matrixWorld.clone().invert());
      this.core['uHit'].value.copy(local);
      this.core['uHitAt'].value = this.clock.getElapsedTime();
    }
  }

  exit() {
    this.narrative.setPhase('INTERFACE');
  }

  private resize() {
    const host = this.canvasHost?.nativeElement;
    if (!host || !this.renderer) return;
    const w = host.clientWidth || window.innerWidth;
    const h = host.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer?.setSize(w, h);
    this.bloom?.setSize(w, h);
  }

  private animate = () => {
    this.frame = requestAnimationFrame(this.animate);
    const t = this.clock.getElapsedTime();

    for (const u of this.clocks) u.value = t;

    if (!this.reduced) {
      this.markers.forEach((m, i) => {
        const head = m.getObjectByName('HEAD');
        const spark = m.getObjectByName('SPARK');
        if (head) {
          head.rotation.z += 0.010;
          head.position.y = 1.95 + Math.sin(t * 1.5 + i * 0.9) * 0.06;
          if (spark) spark.position.y = head.position.y;
        }
      });
      // Los anillos giran a distinta velocidad: da profundidad al conjunto.
      this.rings.forEach((r, i) => { r.rotation.y += 0.0016 * (i + 1) * (i % 2 ? -1 : 1); });
    }

    this.controls.update();
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
    window.removeEventListener('resize', this.onResize);
    this.controls?.dispose();

    // Liberar de verdad: soltar solo el renderer deja colgadas todas las
    // geometrias y materiales de la escena.
    this.scene?.traverse(o => {
      const mesh = o as THREE.Mesh;
      mesh.geometry?.dispose?.();
      const mat = mesh.material;
      if (Array.isArray(mat)) mat.forEach(m => m.dispose());
      else mat?.dispose?.();
    });
    this.composer?.dispose?.();
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }
}

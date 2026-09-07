import {
  Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { DataService } from '../../services/data.service';
import { NarrativeService } from '../../services/narrative.service';
import { I18nService } from '../../services/i18n.service';
import { WindowsService } from '../../services/windows.service';
import { Project } from '../../models/portfolio.models';

/** Cuanto puede moverse el puntero y seguir contando como toque y no arrastre. */
const TAP_PX = 8;
/** Tope de densidad: a DPR 3 sin tope son ~11 Mpx por cuadro. */
const MAX_DPR = 2;

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
  private controls!: OrbitControls;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();

  private world = new THREE.Group();
  private markers: THREE.Group[] = [];
  private uniforms!: Record<string, THREE.IUniform>;

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

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x06070b, 0.021);

    this.camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 400);
    this.camera.position.set(0, 7, 33);

    this.renderer = new THREE.WebGLRenderer({
      antialias: window.devicePixelRatio < 2,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_DPR));
    host.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    // Amortiguacion baja: al soltar sigue girando y frena solo, con inercia.
    this.controls.dampingFactor = 0.045;
    this.controls['rotateSpeed'] = 0.55;
    this.controls.enablePan = false;
    this.controls.minDistance = 19;
    this.controls.maxDistance = 58;
    this.controls.autoRotate = !this.reduced;
    this.controls.autoRotateSpeed = 0.35;

    this.scene.add(this.world);
    this.buildStars();
  }

  private buildStars() {
    const n = 2200;
    const pos = new Float32Array(n * 3);
    const size = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      // Repartidas en una cascara, no en un cubo: no hay estrellas cerca.
      const r = 90 + Math.random() * 130;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.cos(ph);
      pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
      size[i] = Math.random() < 0.06 ? 2.1 : 0.75;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));

    const m = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float aSize; uniform float uTime; varying float vT;
        void main() {
          vT = fract(sin(position.x * 12.9898 + position.z * 78.233) * 43758.5453);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (260.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying float vT; uniform float uTime;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          // Centelleo lento y desfasado: ninguna parpadea igual que la de al lado.
          float tw = 0.65 + 0.35 * sin(uTime * 0.7 + vT * 6.283);
          gl_FragColor = vec4(vec3(0.86, 0.90, 0.97), (1.0 - d * 2.0) * tw * 0.9);
        }`
    });
    this.scene.add(new THREE.Points(g, m));
  }

  /**
   * El planeta. Antes era una esfera de alambre cian; ahora es un cuerpo:
   * nucleo oscuro, reticula fina de meridianos y paralelos, y una atmosfera
   * que se enciende en el borde por fresnel.
   */
  private buildPlanet() {
    const R = 9.4;
    this.uniforms = {
      uTime: { value: 0 },
      uHit: { value: new THREE.Vector3() },
      uHitAt: { value: -100 }
    };

    // --- Nucleo -----------------------------------------------------------
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(R, 32),
      new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: `
          uniform float uTime; uniform vec3 uHit; uniform float uHitAt;
          varying vec3 vN; varying vec3 vView;
          void main() {
            vN = normalize(normalMatrix * normal);
            vec3 p = position;
            // Onda al tocar la superficie: se expande desde el punto y muere.
            float dt = uTime - uHitAt;
            if (dt > 0.0 && dt < 2.2) {
              float d = distance(p, uHit) - dt * 14.0;
              p += normal * sin(d) * exp(-abs(d) * 0.55) * 0.55 * (1.0 - dt / 2.2);
            }
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            vView = -mv.xyz;
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          varying vec3 vN; varying vec3 vView;
          void main() {
            float f = 1.0 - clamp(dot(normalize(vN), normalize(vView)), 0.0, 1.0);
            // Ambar en el limbo, azul profundo en el centro.
            vec3 col = mix(vec3(0.035, 0.045, 0.07), vec3(1.0, 0.70, 0.35), pow(f, 5.5));
            gl_FragColor = vec4(col, 1.0);
          }`
      })
    );
    core.name = 'CORE';
    this.world.add(core);

    // --- Reticula ----------------------------------------------------------
    const grat = new THREE.LineSegments(
      this.graticule(R * 1.002, 12, 8),
      new THREE.LineBasicMaterial({ color: 0x76889b, transparent: true, opacity: 0.5 })
    );
    this.world.add(grat);

    // --- Atmosfera ---------------------------------------------------------
    const air = new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.10, 64, 48),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {},
        vertexShader: `
          varying vec3 vN; varying vec3 vView;
          void main() {
            vN = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vView = -mv.xyz;
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          varying vec3 vN; varying vec3 vView;
          void main() {
            // Con BackSide el fresnel es MAXIMO en la silueta de la cascara, no en
            // el limbo del planeta: por eso un fresnel pelado da un disco plano con
            // el borde cortado. Lo que se necesita es una banda que suba cerca del
            // limbo y se apague antes del borde exterior.
            float d = 1.0 - clamp(dot(normalize(vN), normalize(vView)), 0.0, 1.0);
            float f = smoothstep(0.42, 0.90, d) * (1.0 - smoothstep(0.90, 1.0, d));
            gl_FragColor = vec4(vec3(1.0, 0.72, 0.44) * f, f * 0.62);
          }`
      })
    );
    this.world.add(air);
  }

  /** Meridianos y paralelos como segmentos: mucho mas barato que N circulos. */
  private graticule(r: number, meridians: number, parallels: number): THREE.BufferGeometry {
    const pts: number[] = [];
    const STEP = 64;

    for (let m = 0; m < meridians; m++) {
      const lon = (m / meridians) * Math.PI * 2;
      for (let i = 0; i < STEP; i++) {
        for (const t of [i, i + 1]) {
          const lat = (t / STEP) * Math.PI - Math.PI / 2;
          pts.push(
            r * Math.cos(lat) * Math.cos(lon),
            r * Math.sin(lat),
            r * Math.cos(lat) * Math.sin(lon)
          );
        }
      }
    }
    for (let p = 1; p < parallels; p++) {
      const lat = (p / parallels) * Math.PI - Math.PI / 2;
      const rr = r * Math.cos(lat);
      const y = r * Math.sin(lat);
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
      this.markers.push(this.beacon(9.4, coords[i].lat, coords[i].lon, p, color));
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

  private beacon(r: number, lat: number, lon: number, project: Project, hex: number) {
    const g = new THREE.Group();
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const pos = new THREE.Vector3(
      -(r * Math.sin(phi) * Math.cos(theta)),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
    g.position.copy(pos);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());

    const col = new THREE.Color(hex);

    // Mastil
    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.018, 0.018, 1.9, 5),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.5 })
    );
    stalk.position.y = 0.95;
    g.add(stalk);

    // Cabeza
    const head = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.34, 0),
      new THREE.MeshBasicMaterial({ color: col, wireframe: true })
    );
    head.position.y = 2.05;
    head.name = 'HEAD';
    g.add(head);

    const spark = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    spark.position.y = 2.05;
    g.add(spark);

    // Anillo de anclaje sobre la superficie
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.3, 0.4, 24),
      new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.06;
    g.add(ring);

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

    if (this.hoverGroup) this.tint(this.hoverGroup, this.hoverGroup.userData['base']);
    if (found) this.tint(found, C_SIGNAL);

    this.hoverGroup = found;
    this.hovered.set(found ? (found.userData['project'] as Project).name : null);
  }

  private tint(g: THREE.Group, hex: number) {
    g.traverse(c => {
      if (c instanceof THREE.Mesh && c.name === 'HEAD') {
        (c.material as THREE.MeshBasicMaterial).color.setHex(hex);
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

    // Toque sobre la superficie: onda expansiva desde ese punto.
    const hit = this.raycaster.intersectObjects(this.world.children, true)
      .find(h => h.object.name === 'CORE');
    if (hit && this.uniforms) {
      const local = hit.point.clone().applyMatrix4(hit.object.matrixWorld.clone().invert());
      this.uniforms['uHit'].value.copy(local);
      this.uniforms['uHitAt'].value = this.clock.getElapsedTime();
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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_DPR));
  }

  private animate = () => {
    this.frame = requestAnimationFrame(this.animate);
    const t = this.clock.getElapsedTime();

    if (this.uniforms) this.uniforms['uTime'].value = t;

    if (!this.reduced) {
      this.markers.forEach((m, i) => {
        const head = m.children[1];
        if (head) {
          head.rotation.y += 0.014;
          head.position.y = 2.05 + Math.sin(t * 2.2 + i * 0.9) * 0.14;
        }
      });
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
    window.removeEventListener('resize', this.onResize);
    this.controls?.dispose();

    // Liberar de verdad: antes solo se soltaba el renderer y quedaban
    // colgadas todas las geometrias y materiales de la escena.
    this.scene?.traverse(o => {
      const mesh = o as THREE.Mesh;
      mesh.geometry?.dispose?.();
      const mat = mesh.material;
      if (Array.isArray(mat)) mat.forEach(m => m.dispose());
      else mat?.dispose?.();
    });
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }
}

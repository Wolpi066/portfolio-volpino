import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// IMPORTACIONES
import { DataService } from '../../services/data.service';
import { NarrativeService } from '../../services/narrative.service';
import { I18nService } from '../../services/i18n.service';
import { Project, ProjectStatus } from '../../models/portfolio.models';

/** Cuanto puede moverse el puntero y seguir contando como tap y no como arrastre. */
const TAP_THRESHOLD_PX = 8;

@Component({
  selector: 'app-holo-rebirth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holo-rebirth.component.html',
  styleUrls: ['./holo-rebirth.component.css']
})
export class HoloRebirthComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  private dataService = inject(DataService);
  private narrative = inject(NarrativeService);
  public i18n = inject(I18nService);

  activeProject = signal<Project | null>(null);

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();

  private mainGroup = new THREE.Group();
  private markers: THREE.Group[] = [];

  private COLOR_WEB = 0x00ffff;
  private COLOR_GAME = 0xff00ff;
  private COLOR_HOVER = 0xff0000;
  private COLOR_LIVE = 0x00ff88; // sistemas en produccion

  private hoveredMarker: THREE.Group | null = null;
  private planetUniforms: any;
  private pointerDownAt: { x: number; y: number } | null = null;

  private animationId = 0;
  private clock = new THREE.Clock();

  ngAfterViewInit() {
    this.initThreeJS();
    this.loadProjectMarkers();
    this.animate();
  }

  initThreeJS() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050505);
    this.scene.fog = new THREE.FogExp2(0x050505, 0.002);

    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    this.camera.position.z = 25;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.8;

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
    const starGeo = new THREE.BufferGeometry();
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 300;
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.15, color: 0xffffff, transparent: true, opacity: 0.8 })));

    this.createWireframePlanet();
    this.scene.add(this.mainGroup);
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  createWireframePlanet() {
    const radius = 10;
    const geometry = new THREE.IcosahedronGeometry(radius, 4);
    this.planetUniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0x00ffff) },
      uClickPos: { value: new THREE.Vector3(0, 0, 0) },
      uClickTime: { value: -100.0 }
    };
    const material = new THREE.ShaderMaterial({
      uniforms: this.planetUniforms,
      wireframe: true, transparent: true,
      vertexShader: `
        uniform float uTime; uniform vec3 uClickPos; uniform float uClickTime;
        varying vec3 vNormal;
        void main() {
          vNormal = normal; vec3 pos = position;
          float dist = distance(pos, uClickPos);
          float timeSinceClick = uTime - uClickTime;
          if (timeSinceClick > 0.0 && timeSinceClick < 2.5) {
             float waveDist = timeSinceClick * 15.0;
             float diff = dist - waveDist;
             if (abs(diff) < 5.0) {
                float wave = sin(diff * 1.0) * exp(-abs(diff) * 0.5);
                pos += normal * wave * 0.8;
             }
          }
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `uniform vec3 uColor; void main() { gl_FragColor = vec4(uColor, 0.25); }`
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.name = "PLANET_SURFACE";
    this.mainGroup.add(sphere);
    const glowGeo = new THREE.IcosahedronGeometry(radius + 0.5, 2);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.05, side: THREE.BackSide });
    this.mainGroup.add(new THREE.Mesh(glowGeo, glowMat));
  }

  /**
   * Espiral de Fibonacci: reparte N puntos de forma pareja sobre la esfera.
   * Antes habia un array fijo de 4 coordenadas con `i % 4`, asi que a partir
   * del 5to proyecto los marcadores se apilaban sobre los primeros.
   */
  private spherePositions(count: number): { lat: number; lon: number }[] {
    if (count === 1) return [{ lat: 15, lon: 0 }];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const positions: { lat: number; lon: number }[] = [];

    for (let i = 0; i < count; i++) {
      // Evitamos los polos exactos: quedan feos y se superponen visualmente.
      const y = 1 - ((i + 0.5) / count) * 2;
      const lat = Math.asin(Math.max(-1, Math.min(1, y))) * (180 / Math.PI);
      const lon = (((goldenAngle * i) * (180 / Math.PI)) % 360) - 180;
      positions.push({ lat: lat * 0.82, lon });
    }
    return positions;
  }

  loadProjectMarkers() {
    const projects = this.dataService.projects();
    const coords = this.spherePositions(projects.length);

    projects.forEach((proj, i) => {
      const pos = coords[i];

      // Color por naturaleza del proyecto: en produccion, juego, o web/app.
      let color = this.COLOR_WEB;
      if (proj.status === 'PRODUCTION' || proj.status === 'DELIVERED') {
        color = this.COLOR_LIVE;
      } else if (proj.status === 'PROTOTYPE') {
        color = this.COLOR_GAME;
      }

      this.createBeacon(10, pos.lat, pos.lon, proj, color);
    });
  }

  createBeacon(radius: number, lat: number, lon: number, project: Project, colorHex: number) {
    const markerGroup = new THREE.Group();
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    const position = new THREE.Vector3(x, y, z);
    markerGroup.position.copy(position);
    markerGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), position.clone().normalize());

    const diamGeo = new THREE.OctahedronGeometry(0.5, 0);
    const diamMat = new THREE.MeshBasicMaterial({ color: colorHex, wireframe: true });
    const diamond = new THREE.Mesh(diamGeo, diamMat);
    diamond.position.y = 2.5;
    diamond.name = "BEACON_DIAMOND";
    markerGroup.add(diamond);

    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    diamond.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), coreMat));

    const lineMat = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.5 });
    const line = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.5, 4), lineMat);
    line.position.y = 1.25; markerGroup.add(line);

    const ringMat = new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.5, 6), ringMat);
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.1; markerGroup.add(ring);

    markerGroup.userData = { isMarker: true, project: project, baseColor: colorHex };
    this.mainGroup.add(markerGroup);
    this.markers.push(markerGroup);
  }

  /**
   * Lanza un rayo desde la posicion del puntero y devuelve el marcador tocado.
   * Se usa tanto para el hover como para el tap: en touch no hay mousemove previo,
   * asi que el click NO puede depender del estado de hover.
   */
  private pickMarker(clientX: number, clientY: number): THREE.Group | null {
    this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(this.mainGroup.children, true);
    if (!intersects.length) return null;

    let obj: THREE.Object3D = intersects[0].object;
    while (obj.parent && obj.parent !== this.mainGroup) {
      if (obj.userData && obj.userData['isMarker']) return obj as THREE.Group;
      if (obj.parent.userData && obj.parent.userData['isMarker']) return obj.parent as THREE.Group;
      obj = obj.parent;
    }
    return null;
  }

  onPointerMove(event: PointerEvent) {
    // En touch el hover no existe; el resaltado solo aplica a mouse/lapiz.
    if (event.pointerType === 'touch') return;

    const foundMarker = this.pickMarker(event.clientX, event.clientY);

    if (foundMarker !== this.hoveredMarker) {
      if (this.hoveredMarker) {
        this.setMarkerColor(this.hoveredMarker, this.hoveredMarker.userData['baseColor']);
        document.body.classList.remove('hover-active');
      }
      if (foundMarker) {
        this.setMarkerColor(foundMarker, this.COLOR_HOVER);
        document.body.classList.add('hover-active');
      }
      this.hoveredMarker = foundMarker;
    }
  }

  setMarkerColor(group: THREE.Group, colorHex: number) {
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.name === "BEACON_DIAMOND" || child.geometry.type === 'CylinderGeometry') {
          (child.material as THREE.MeshBasicMaterial).color.setHex(colorHex);
        }
      }
    });
  }

  onPointerDown(event: PointerEvent) {
    this.pointerDownAt = { x: event.clientX, y: event.clientY };
  }

  /**
   * La accion va en pointerup y solo si el puntero casi no se movio.
   * Asi arrastrar para rotar el planeta no abre un proyecto sin querer.
   */
  onPointerUp(event: PointerEvent) {
    const start = this.pointerDownAt;
    this.pointerDownAt = null;
    if (!start) return;

    const moved = Math.hypot(event.clientX - start.x, event.clientY - start.y);
    if (moved > TAP_THRESHOLD_PX) return; // fue un arrastre, no un tap

    const marker = this.pickMarker(event.clientX, event.clientY);
    if (marker) {
      this.controls.autoRotate = false;
      this.openProject(marker.userData['project']);
      return;
    }

    const planetHit = this.raycaster.intersectObjects(this.mainGroup.children, true).find(h => h.object.name === "PLANET_SURFACE");
    if (planetHit) {
      const localPoint = planetHit.point.clone().applyMatrix4(planetHit.object.matrixWorld.clone().invert());
      if (this.planetUniforms) {
        this.planetUniforms.uClickPos.value.copy(localPoint);
        this.planetUniforms.uClickTime.value = this.clock.getElapsedTime();
      }
    }
  }

  openProject(project: Project) { this.activeProject.set(project); }
  closeProject() { this.activeProject.set(null); this.controls.autoRotate = true; }

  statusLabel(status?: ProjectStatus): string {
    if (!status) return '';
    const t = this.i18n.t();
    const map: Record<ProjectStatus, string> = {
      PRODUCTION: t.statusPRODUCTION,
      DELIVERED: t.statusDELIVERED,
      DEPLOYED: t.statusDEPLOYED,
      PROTOTYPE: t.statusPROTOTYPE
    };
    return map[status] ?? status;
  }

  /** Vuelve a la interfaz principal. Antes de esto, del 3D no se salia. */
  exitToInterface() {
    document.body.classList.remove('hover-active');
    this.narrative.setPhase('INTERFACE');
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    const time = this.clock.getElapsedTime();
    if (this.planetUniforms) { this.planetUniforms.uTime.value = time; }
    this.markers.forEach((m, i) => {
      const diamond = m.children[0];
      if (diamond) {
        diamond.rotation.y += 0.02;
        diamond.position.y = 2.5 + Math.sin(time * 3 + i) * 0.2;
      }
    });
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.onWindowResize);
    if (this.renderer) this.renderer.dispose();
  }
}
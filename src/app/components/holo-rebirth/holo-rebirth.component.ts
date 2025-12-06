import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DataService, Project } from '../../services/data.service';

@Component({
  selector: 'app-holo-rebirth',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #rendererContainer class="holo-container" (mousedown)="onMouseDown($event)"></div>
    
    <div class="hud-overlay">
      <div class="scan-line"></div>
      
      <div class="hud-top-left">
        <h1>// SYSTEM_ONLINE</h1>
        <div class="sub-text">HOST: VOLPINO_NODE</div>
        <div class="sub-text blink">Connection: SECURE</div>
      </div>

      <div class="hud-bottom-center">
        <div class="nav-hint">[ DRAG TO ROTATE ]</div>
        <div class="nav-hint">[ CLICK PLANET FOR PHYSICS ]</div>
        <div class="nav-hint">[ CLICK NODES FOR DATA ]</div>
      </div>
    </div>

    <div class="project-card" [class.visible]="activeProject()">
      <div class="card-content">
        <div class="card-header">
          <span class="card-id">ID: {{ activeProject()?.id }}</span>
          <button class="close-btn" (click)="closeProject()">[X]</button>
        </div>
        
        <h2 class="card-title">{{ activeProject()?.name }}</h2>
        <div class="card-divider"></div>
        
        <p class="card-desc">{{ activeProject()?.description }}</p>
        
        <div class="tech-stack">
          @for (tech of activeProject()?.techStack; track tech) {
            <span class="tech-badge">{{ tech }}</span>
          }
        </div>

        <p class="card-status">> STATUS: <span class="status-val">{{ activeProject()?.status }}</span></p>
        
        <div class="card-actions">
          <a [href]="activeProject()?.githubUrl" target="_blank" class="action-btn">
            <span>ACCESS REPOSITORY</span>
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .holo-container {
      position: absolute; top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: #050505;
      overflow: hidden; z-index: 1;
    }

    /* --- HUD --- */
    .hud-overlay {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 10;
      background: radial-gradient(circle at center, transparent 50%, black 140%);
    }
    
    .hud-top-left {
      position: absolute; top: 40px; left: 40px;
      font-family: 'Courier New', monospace; color: #00ffff;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    h1 { font-size: 14px; letter-spacing: 3px; margin: 0 0 5px 0; }
    .sub-text { font-size: 10px; letter-spacing: 2px; opacity: 0.7; color: #00ffff; }
    .blink { animation: blink 2s infinite; }
    
    .hud-bottom-center {
      position: absolute; bottom: 40px; width: 100%; text-align: center;
    }
    .nav-hint {
      font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 3px;
      color: rgba(0, 255, 255, 0.5); margin-bottom: 5px;
    }
    .scan-line {
      position: absolute; top: 0; left: 0; width: 100%; height: 2px;
      background: linear-gradient(90deg, transparent, rgba(0,255,255,0.5), transparent);
      animation: scan 8s linear infinite; opacity: 0.2; pointer-events: none;
    }

    /* --- TARJETA DE PROYECTO --- */
    .project-card {
      position: absolute; top: 50%; right: 10%;
      transform: translateY(-50%) translateX(50px);
      width: 320px;
      background: rgba(5, 10, 15, 0.95);
      border: 1px solid #00ffff;
      box-shadow: 0 0 30px rgba(0, 255, 255, 0.15);
      padding: 2px; opacity: 0; pointer-events: none;
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); 
      z-index: 20;
      font-family: 'Courier New', monospace;
    }
    .project-card.visible {
      opacity: 1; pointer-events: auto;
      transform: translateY(-50%) translateX(0);
    }
    .card-content { padding: 20px; }
    .card-header { display: flex; justify-content: space-between; margin-bottom: 15px; }
    .card-id { font-size: 10px; color: #666; letter-spacing: 1px; }
    .close-btn { 
      background: none; border: none; color: #00ffff; cursor: pointer; font-size: 14px; 
      transition: color 0.2s;
    }
    .close-btn:hover { color: #ff3333; }
    
    .card-title { font-size: 18px; color: #fff; margin: 0 0 10px 0; letter-spacing: 1px; text-transform: uppercase; }
    .card-divider { height: 1px; background: #00ffff; margin-bottom: 15px; opacity: 0.3; }
    
    .card-desc {
      font-size: 11px; line-height: 1.5; color: #ccc; 
      margin-bottom: 15px; border-left: 2px solid #00aaaa; padding-left: 10px;
    }
    
    .tech-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 15px; }
    .tech-badge {
      font-size: 9px; padding: 3px 6px; background: rgba(0, 255, 170, 0.1);
      border: 1px solid #00ffaa; color: #00ffaa; border-radius: 2px;
    }

    .card-type, .card-status { font-size: 10px; color: #00aaaa; margin: 5px 0; }
    .status-val { color: #00ff41; }
    
    .action-btn {
      margin-top: 20px; width: 100%; padding: 12px;
      background: rgba(0, 255, 255, 0.1); border: 1px solid #00ffff;
      color: #00ffff; font-family: inherit; font-size: 11px; font-weight: bold; letter-spacing: 1px;
      cursor: pointer; display: flex; justify-content: space-between; text-decoration: none;
      transition: all 0.2s;
    }
    .action-btn:hover { background: #00ffff; color: black; box-shadow: 0 0 15px rgba(0,255,255,0.4); }

    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
    @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
  `]
})
export class HoloRebirthComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  private dataService = inject(DataService);

  activeProject = signal<Project | null>(null);

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();

  private mainGroup = new THREE.Group();
  private markers: THREE.Group[] = [];

  // Variables para el efecto de onda
  private planetUniforms: any;

  private animationId = 0;
  private clock = new THREE.Clock();

  // Configuración de colores
  private MARKER_COLOR = 0x00ffaa;
  private PLANET_COLOR = 0x00ffff;

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
    this.controls.dampingFactor = 0.05;
    this.controls.enablePan = false;
    this.controls.minDistance = 15;
    this.controls.maxDistance = 45;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.8;

    this.createSpaceEnvironment();
    this.createWireframePlanet();

    this.scene.add(this.mainGroup);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  createSpaceEnvironment() {
    const starGeo = new THREE.BufferGeometry();
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 300;
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const starMat = new THREE.PointsMaterial({ size: 0.15, color: 0xffffff, transparent: true, opacity: 0.8 });
    this.scene.add(new THREE.Points(starGeo, starMat));

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
  }

  createWireframePlanet() {
    const radius = 10;

    // Aumentamos detalle para que la onda se vea suave
    const geometry = new THREE.IcosahedronGeometry(radius, 4);

    // SHADER PERSONALIZADO (Ripple Effect)
    this.planetUniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(this.PLANET_COLOR) },
      uClickPos: { value: new THREE.Vector3(0, 0, 0) }, // Posición del clic en espacio local
      uClickTime: { value: -100.0 } // Tiempo del clic
    };

    const material = new THREE.ShaderMaterial({
      uniforms: this.planetUniforms,
      wireframe: true,
      transparent: true,
      vertexShader: `
        uniform float uTime;
        uniform vec3 uClickPos;
        uniform float uClickTime;
        
        varying vec3 vNormal;

        void main() {
          vNormal = normal;
          vec3 pos = position;
          
          // Lógica de la onda
          float dist = distance(pos, uClickPos);
          float timeSinceClick = uTime - uClickTime;
          
          // Parámetros de la onda
          float speed = 15.0;
          float width = 5.0;
          float amplitude = 0.8; 

          if (timeSinceClick > 0.0 && timeSinceClick < 2.5) {
             float waveDist = timeSinceClick * speed;
             float diff = dist - waveDist;
             
             if (abs(diff) < width) {
                // Función seno amortiguada para el relieve
                float wave = sin(diff * 1.0) * exp(-abs(diff) * 0.5);
                pos += normal * wave * amplitude;
             }
          }

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        void main() {
          gl_FragColor = vec4(uColor, 0.25); 
        }
      `
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.name = "PLANET_SURFACE"; // Etiqueta para Raycasting
    this.mainGroup.add(sphere);

    // Atmósfera (Halo)
    const glowGeo = new THREE.IcosahedronGeometry(radius + 0.5, 2);
    const glowMat = new THREE.MeshBasicMaterial({
      color: this.PLANET_COLOR,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    });
    this.mainGroup.add(new THREE.Mesh(glowGeo, glowMat));
  }

  loadProjectMarkers() {
    const projects = this.dataService.projects;
    // Coordenadas distribuidas
    const coords = [
      { lat: 20, lon: 0 }, { lat: -20, lon: 60 }, { lat: 40, lon: -60 }, { lat: 0, lon: 180 }
    ];

    projects.forEach((proj, i) => {
      const pos = coords[i % coords.length];
      this.createBeacon(10, pos.lat, pos.lon, proj);
    });
  }

  createBeacon(radius: number, lat: number, lon: number, project: Project) {
    const markerGroup = new THREE.Group();

    // Conversión esférica
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = (radius * Math.sin(phi) * Math.sin(theta));
    const y = (radius * Math.cos(phi));

    const position = new THREE.Vector3(x, y, z);
    markerGroup.position.copy(position);

    // Alinear perfectamente hacia afuera
    markerGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), position.clone().normalize());

    // --- DISEÑO DEL MARCADOR (Diamante Tech) ---
    // 1. Diamante (Wireframe)
    const diamGeo = new THREE.OctahedronGeometry(0.5, 0);
    const diamMat = new THREE.MeshBasicMaterial({ color: this.MARKER_COLOR, wireframe: true });
    const diamond = new THREE.Mesh(diamGeo, diamMat);
    diamond.position.y = 2.5;
    markerGroup.add(diamond);

    // 2. Núcleo Sólido
    const coreGeo = new THREE.OctahedronGeometry(0.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    diamond.add(new THREE.Mesh(coreGeo, coreMat));

    // 3. Línea Láser
    const lineGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.5, 4);
    const lineMat = new THREE.MeshBasicMaterial({ color: this.MARKER_COLOR, transparent: true, opacity: 0.5 });
    const line = new THREE.Mesh(lineGeo, lineMat);
    line.position.y = 1.25;
    markerGroup.add(line);

    // 4. Base (Anillo)
    const ringGeo = new THREE.RingGeometry(0.3, 0.5, 6);
    const ringMat = new THREE.MeshBasicMaterial({ color: this.MARKER_COLOR, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.1;
    markerGroup.add(ring);

    markerGroup.userData = { isMarker: true, project: project };

    this.mainGroup.add(markerGroup);
    this.markers.push(markerGroup);
  }

  onMouseDown(event: MouseEvent) {
    this.controls.autoRotate = false;

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(this.mainGroup.children, true);

    if (intersects.length > 0) {
      // 1. Buscar si se clickeó un marcador (puede ser un hijo del grupo marker)
      let obj = intersects[0].object;
      let markerGroup = null;

      // Subir por la jerarquía hasta encontrar el grupo del marcador
      while (obj.parent && obj.parent !== this.mainGroup) {
        if (obj.userData && obj.userData['isMarker']) { markerGroup = obj; break; }
        if (obj.parent.userData && obj.parent.userData['isMarker']) { markerGroup = obj.parent; break; }
        obj = obj.parent;
      }

      if (markerGroup) {
        this.openProject(markerGroup.userData['project']);
        return;
      }

      // 2. Si no es marcador, ver si es el planeta para el efecto Ripple
      const planetHit = intersects.find(h => h.object.name === "PLANET_SURFACE");
      if (planetHit) {
        // Convertir punto del mundo a espacio local del objeto
        const localPoint = planetHit.point.clone().applyMatrix4(planetHit.object.matrixWorld.clone().invert());
        this.triggerRipple(localPoint);
      }
    }
  }

  triggerRipple(point: THREE.Vector3) {
    if (this.planetUniforms) {
      this.planetUniforms.uClickPos.value.copy(point);
      this.planetUniforms.uClickTime.value = this.clock.getElapsedTime();
    }
  }

  openProject(project: Project) {
    this.activeProject.set(project);
  }

  closeProject() {
    this.activeProject.set(null);
    this.controls.autoRotate = true;
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    const time = this.clock.getElapsedTime();

    // Actualizar tiempo para el Shader
    if (this.planetUniforms) {
      this.planetUniforms.uTime.value = time;
    }

    // Animar marcadores
    this.markers.forEach((m, i) => {
      const diamond = m.children[0];
      if (diamond) {
        diamond.rotation.y += 0.02;
        // Flotar suavemente
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
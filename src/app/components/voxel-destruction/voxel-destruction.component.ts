import { Component, ElementRef, ViewChild, inject, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { NarrativeService } from '../../services/narrative.service';

@Component({
  selector: 'app-voxel-destruction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #rendererContainer class="destruction-container"></div>
    
    <img *ngIf="capturedImage && !isReady" [src]="capturedImage" class="seamless-placeholder">
    
    <div class="code-overlay" [class.active]="isGlitching">
      <div class="code-column" *ngFor="let i of [1,2,3,4,5]">
        {{ getRandomHex() }}
      </div>
    </div>

    <div class="terminal-overlay" [class.visible]="showRebootText">
      <div class="line error">>> FATAL_SYSTEM_ERROR: 0xC000021A</div>
      <div class="line">>> KERNEL_DATA_INPAGE_ERROR</div>
      <div class="line">>> DUMPING_PHYSICAL_MEMORY...</div>
      <div class="line blink">_</div>
    </div>
  `,
  styles: [`
    .destruction-container {
      position: fixed; top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: #000;
      z-index: 9999;
    }
    
    /* Imagen perfecta sobre el canvas */
    .seamless-placeholder {
      position: fixed; top: 0; left: 0;
      width: 100vw; height: 100vh;
      object-fit: cover; /* Asegura que cubra igual que el background */
      z-index: 10000; /* Encima del canvas negro */
      pointer-events: none;
    }

    .code-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      z-index: 10001; display: flex; justify-content: space-between;
      pointer-events: none; opacity: 0; padding: 0 20px;
    }
    .code-overlay.active { opacity: 0.4; }
    .code-column {
      font-family: 'Courier New', monospace; color: #00ff41; font-size: 12px;
      width: 20px; word-break: break-all; text-shadow: 0 0 5px #00ff41; opacity: 0.7;
    }
    .terminal-overlay {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      font-family: 'Courier New', monospace; width: 80%; max-width: 600px;
      background: rgba(0,0,0,0.95); border: 1px solid #ff3333; padding: 30px;
      box-shadow: 0 0 30px rgba(255, 0, 0, 0.2); z-index: 10002;
      opacity: 0; transition: opacity 0.2s;
    }
    .line { margin-bottom: 8px; color: #ccc; font-size: 14px; }
    .line.error { color: #ff3333; font-weight: bold; text-shadow: 0 0 8px #ff0000; }
    .visible { opacity: 1; }
    .blink { animation: blink 0.5s infinite; }
    @keyframes blink { 50% { opacity: 0; } }
  `]
})
export class VoxelDestructionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  private narrative = inject(NarrativeService);

  private scene!: THREE.Scene;
  private camera!: THREE.OrthographicCamera;
  private renderer!: THREE.WebGLRenderer;
  private material!: THREE.ShaderMaterial;

  private animationId: number = 0;
  private startTime = 0;

  capturedImage: string | null = null;
  isReady = false; // Controla cuando quitamos la imagen estática
  isGlitching = false;
  showRebootText = false;

  getRandomHex() {
    let result = '';
    const chars = '0123456789ABCDEF@#&%';
    for (let i = 0; i < 80; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length)) + '\n';
    }
    return result;
  }

  ngAfterViewInit() {
    const imgData = this.narrative.capturedScreen();
    this.capturedImage = imgData; // Guardar para el HTML
    this.initGlitchShader(imgData);
  }

  initGlitchShader(imgDataUrl: string | null) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    const texture = imgDataUrl ? new THREE.TextureLoader().load(imgDataUrl, () => {
      // Callback: Se ejecuta cuando la textura cargó
      // Esperamos un frame para asegurar que se pintó
      requestAnimationFrame(() => {
        this.isReady = true; // Ocultar imagen estática
      });
    }) : new THREE.Texture();

    if (imgDataUrl) {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.colorSpace = THREE.SRGBColorSpace;
    }

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: texture },
        uTime: { value: 0.0 },
        uIntensity: { value: 0.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;
        float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
        void main() {
          vec2 uv = vUv;
          float split = 0.0;
          if (uIntensity > 0.0) {
              float sliceY = floor(uv.y * 20.0 + uTime * 2.0); 
              if (random(vec2(sliceY, uTime)) < uIntensity) {
                  split = (random(vec2(uTime, sliceY)) - 0.5) * uIntensity * 0.2;
              }
          }
          vec2 splitUV = vec2(uv.x + split, uv.y);
          float r = texture2D(tDiffuse, splitUV + vec2(uIntensity * 0.01, 0.0)).r;
          float g = texture2D(tDiffuse, splitUV).g;
          float b = texture2D(tDiffuse, splitUV - vec2(uIntensity * 0.01, 0.0)).b;
          float noise = random(uv * uTime) * uIntensity * 0.3;
          vec3 color = vec3(r, g, b) + noise;
          if (uIntensity > 0.8 && random(vec2(uTime, 0.0)) > 0.5) color = 1.0 - color;
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.scene.add(new THREE.Mesh(geometry, this.material));

    this.startTime = Date.now();
    this.animate();
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    const elapsed = (Date.now() - this.startTime) / 1000;
    let intensity = 0;

    // Ajusté los tiempos para que el glitch empiece suave
    if (elapsed < 1.0) {
      // Fase 1: Imagen quieta (Tensión)
      intensity = 0.0;
    }
    else if (elapsed < 3.0) {
      // Fase 2: Glitch progresivo
      intensity = (elapsed - 1.0) * 0.3;
      this.isGlitching = true;
    }
    else if (elapsed < 4.5) {
      // Fase 3: Caos total y Texto
      intensity = 1.0 + Math.random() * 0.5;
      this.showRebootText = true;
    }
    else {
      // Fase 4: Pantalla negra final
      intensity = 0;
      this.isGlitching = false;
      this.scene.background = new THREE.Color(0x000000);
      if (this.scene.children[0]) this.scene.children[0].visible = false;
    }

    if (this.material) {
      this.material.uniforms['uTime'].value = elapsed;
      this.material.uniforms['uIntensity'].value = intensity;
    }

    if (elapsed > 6.5) this.finishSequence();
    this.renderer.render(this.scene, this.camera);
  }

  finishSequence() { this.narrative.setPhase('REBIRTH'); }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    if (this.renderer) this.renderer.dispose();
    if (this.material) this.material.dispose();
  }
}
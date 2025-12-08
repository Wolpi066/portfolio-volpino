import { Component, ElementRef, ViewChild, inject, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { NarrativeService } from '../../services/narrative.service';

@Component({
  selector: 'app-voxel-destruction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voxel-destruction.component.html', // <--- Vinculación
  styleUrls: ['./voxel-destruction.component.css']
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
  isReady = false;
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
    this.capturedImage = imgData;
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
      requestAnimationFrame(() => this.isReady = true);
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

    this.scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material));
    this.startTime = Date.now();
    this.animate();
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    const elapsed = (Date.now() - this.startTime) / 1000;
    let intensity = 0;

    if (elapsed < 1.0) intensity = 0.0;
    else if (elapsed < 3.0) { intensity = (elapsed - 1.0) * 0.3; this.isGlitching = true; }
    else if (elapsed < 4.5) { intensity = 1.0 + Math.random() * 0.5; this.showRebootText = true; }
    else {
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
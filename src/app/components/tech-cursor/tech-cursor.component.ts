import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-arrow" 
         [class.hovering]="isHovering()" 
         [style.transform]="cursorTransform()">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M4 2L20 10L12 12L10 20L4 2Z" fill="#00ffaa" stroke="none"/>
      </svg>
    </div>
    
    <div class="cursor-trail" [style.transform]="trailTransform()"></div>
  `,
  styles: [`
    :host {
      pointer-events: none;
      position: fixed; top: 0; left: 0; z-index: 99999;
      mix-blend-mode: difference;
    }
    
    .cursor-arrow {
      position: absolute;
      top: 0; left: 0;
      width: 24px; height: 24px;
      transition: transform 0.05s ease-out, filter 0.2s;
      will-change: transform;
      filter: drop-shadow(0 0 5px #00ffaa);
    }
    
    .cursor-trail {
      position: absolute;
      top: 0; left: 0;
      width: 8px; height: 8px;
      background: rgba(0, 255, 170, 0.5);
      border-radius: 50%;
      margin-left: 2px; margin-top: 2px; /* Ajuste centro */
      transition: transform 0.15s ease-out;
    }

    /* ESTADO HOVER (Interactivo) */
    .cursor-arrow.hovering {
      filter: drop-shadow(0 0 8px #ff3333);
    }
    .cursor-arrow.hovering path {
      fill: #ff3333; /* Cambia a rojo */
    }
  `]
})
export class TechCursorComponent {
  cursorTransform = signal('translate(-100px, -100px)');
  trailTransform = signal('translate(-100px, -100px)');
  isHovering = signal(false);

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;

    this.cursorTransform.set(`translate(${x}px, ${y}px)`);
    this.trailTransform.set(`translate(${x}px, ${y}px)`);

    // Detectar interactivos
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, .study-card, .project-card, .tech-btn, .reset-btn');
    this.isHovering.set(!!isInteractive);
  }
}
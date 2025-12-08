import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-cursor.component.html', // <--- Vinculación
  styleUrls: ['./tech-cursor.component.css']
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

    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, .study-card, .project-card, .tech-btn, .reset-btn, .skill-card, .hover-trigger');

    this.isHovering.set(!!isInteractive);
  }
}
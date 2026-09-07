import { Component, HostListener, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NarrativeService } from '../../services/narrative.service';

/**
 * Cursor dibujado.
 *
 * Solo cuando este componente monta se le pone .has-cursor a <html>, que es
 * lo unico que activa `cursor: none` en styles.css. Antes la regla era
 * incondicional: si el componente no montaba, la pagina quedaba sin puntero
 * y no habia forma de recuperarlo.
 *
 * El rastro no sigue al puntero al instante: lo persigue con un resorte, que
 * es lo que le da peso. Sin eso el movimiento se siente sintetico.
 */
@Component({
  selector: 'app-tech-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-cursor.component.html',
  styleUrls: ['./tech-cursor.component.css']
})
export class TechCursorComponent implements OnInit, OnDestroy {
  private narrative = inject(NarrativeService);

  dot = signal('translate3d(-100px, -100px, 0)');
  ring = signal('translate3d(-100px, -100px, 0)');
  hot = signal(false);
  down = signal(false);

  private x = -100; private y = -100;
  private rx = -100; private ry = -100;
  private raf = 0;
  private enabled = false;

  ngOnInit() {
    // Sin puntero fino no hay cursor que dibujar, y con movimiento reducido
    // un rastro persiguiendo al mouse es justo lo que molesta.
    this.enabled =
      matchMedia('(pointer: fine)').matches && !this.narrative.prefersReducedMotion();

    if (!this.enabled) return;
    document.documentElement.classList.add('has-cursor');
    this.loop();
  }

  @HostListener('window:pointermove', ['$event'])
  onMove(e: PointerEvent) {
    if (!this.enabled || e.pointerType !== 'mouse') return;
    this.x = e.clientX;
    this.y = e.clientY;

    const el = e.target as HTMLElement | null;
    this.hot.set(!!el?.closest('a, button, [role="button"], input, .shot, .bar'));
  }

  @HostListener('window:pointerdown') onDown() { this.down.set(true); }
  @HostListener('window:pointerup') onUp() { this.down.set(false); }

  private loop = () => {
    // El punto va exacto; el anillo llega tarde y de a poco.
    this.rx += (this.x - this.rx) * 0.16;
    this.ry += (this.y - this.ry) * 0.16;

    this.dot.set(`translate3d(${this.x}px, ${this.y}px, 0)`);
    this.ring.set(`translate3d(${this.rx}px, ${this.ry}px, 0)`);

    this.raf = requestAnimationFrame(this.loop);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
    document.documentElement.classList.remove('has-cursor');
  }
}

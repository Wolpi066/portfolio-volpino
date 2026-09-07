import {
  Component, ElementRef, ViewChild, HostListener, OnInit, OnDestroy, inject
} from '@angular/core';
import { NarrativeService } from '../../services/narrative.service';

/**
 * Cursor dibujado.
 *
 * REGLA DEL LAZO CALIENTE: aca no hay signals ni binding de Angular. El
 * transform se escribe directo sobre el nodo. Escribir un signal en cada
 * cuadro dispara deteccion de cambios sesenta veces por segundo en TODA la
 * aplicacion, y eso era exactamente lo que hacia que el cursor se sintiera
 * pesado y trabado.
 *
 * El tamaño del anillo tambien cambia por transform (scale), no por
 * inline-size/margin: esas son propiedades de layout y obligan a recalcular
 * el arbol en cada transicion.
 *
 * Solo cuando este componente monta se le pone .has-cursor a <html>, que es
 * lo unico que activa `cursor: none`. Si no monta, el puntero del sistema
 * sigue ahi.
 */
@Component({
  selector: 'app-tech-cursor',
  standalone: true,
  templateUrl: './tech-cursor.component.html',
  styleUrls: ['./tech-cursor.component.css']
})
export class TechCursorComponent implements OnInit, OnDestroy {
  private narrative = inject(NarrativeService);

  @ViewChild('dot', { static: true }) dotEl!: ElementRef<HTMLElement>;
  @ViewChild('ring', { static: true }) ringEl!: ElementRef<HTMLElement>;

  private x = -100; private y = -100;
  private rx = -100; private ry = -100;
  private raf = 0;
  private enabled = false;
  private hot = false;
  private down = false;

  ngOnInit() {
    this.enabled =
      matchMedia('(pointer: fine)').matches && !this.narrative.prefersReducedMotion();
    if (!this.enabled) return;

    document.documentElement.classList.add('has-cursor');
    this.raf = requestAnimationFrame(this.loop);
  }

  @HostListener('window:pointermove', ['$event'])
  onMove(e: PointerEvent) {
    if (!this.enabled || e.pointerType !== 'mouse') return;
    this.x = e.clientX;
    this.y = e.clientY;

    const el = e.target as HTMLElement | null;
    const hot = !!el?.closest('a, button, [role="button"], input, .shot, .bar, .card-hit');
    if (hot !== this.hot) {
      this.hot = hot;
      this.ringEl.nativeElement.classList.toggle('hot', hot);
      this.dotEl.nativeElement.classList.toggle('hot', hot);
    }
  }

  @HostListener('window:pointerdown') onDown() { this.setDown(true); }
  @HostListener('window:pointerup') onUp() { this.setDown(false); }

  private setDown(v: boolean) {
    if (!this.enabled || v === this.down) return;
    this.down = v;
    this.ringEl.nativeElement.classList.toggle('down', v);
  }

  private loop = () => {
    // El punto va exacto; el anillo llega tarde. Esa diferencia es lo que le
    // da peso: sin ella el movimiento se siente sintetico.
    this.rx += (this.x - this.rx) * 0.22;
    this.ry += (this.y - this.ry) * 0.22;

    this.dotEl.nativeElement.style.transform =
      `translate3d(${this.x}px, ${this.y}px, 0)`;
    this.ringEl.nativeElement.style.transform =
      `translate3d(${this.rx}px, ${this.ry}px, 0)`;

    this.raf = requestAnimationFrame(this.loop);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
    document.documentElement.classList.remove('has-cursor');
  }
}

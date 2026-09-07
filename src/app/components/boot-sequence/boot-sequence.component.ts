import {
  Component, ElementRef, ViewChild, AfterViewInit, OnDestroy,
  inject, signal, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { NarrativeService } from '../../services/narrative.service';
import { I18nService } from '../../services/i18n.service';

/** Una linea del arranque. El valor sale de datos reales, no de relleno. */
interface BootLine {
  tag: string;
  label: string;
  value: string;
}

/**
 * ARRANQUE EN FRIO — tres actos.
 *
 *   I.   La consola se dibuja en el centro y se escribe el nombre del sistema.
 *   II.  La consola MIGRA al angulo superior izquierdo mientras corre el
 *        registro de arranque, y la interfaz aparece por detras.
 *   III. La consola aterriza exactamente donde vive el encabezado y le cede
 *        el lugar: no desaparece, se convierte en el.
 *
 * Reglas que no se negocian:
 *   - La interfaz se monta DEBAJO desde el primer frame, asi el LCP es el
 *     hero real y no este cargador (antes costaba 2,5 s de LCP).
 *   - Corre una sola vez por sesion.
 *   - Cualquier tecla, click o toque lo saltea.
 *   - Con prefers-reduced-motion no corre.
 *   - Si algo falla, un temporizador de seguridad entra igual a la interfaz.
 */
@Component({
  selector: 'app-boot-sequence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boot-sequence.component.html',
  styleUrls: ['./boot-sequence.component.css']
})
export class BootSequenceComponent implements AfterViewInit, OnDestroy {
  private narrative = inject(NarrativeService);
  public i18n = inject(I18nService);

  @ViewChild('console') consoleEl!: ElementRef<HTMLElement>;
  @ViewChild('shell') shellEl!: ElementRef<HTMLElement>;

  /** Lo que se ve tipeado en el acto I. */
  typed = signal('');
  /** Cuantas lineas del registro ya entraron. */
  shown = signal(0);
  /** Acto actual, para que el CSS sepa en que estado esta. */
  act = signal<0 | 1 | 2 | 3>(0);

  private tl?: gsap.core.Timeline;
  private failsafe?: ReturnType<typeof setTimeout>;
  private done = false;

  readonly lines: BootLine[] = [
    { tag: 'MOD', label: 'núcleo angular', value: '20.3.13' },
    { tag: 'MOD', label: 'motor de geometría', value: 'three r181' },
    { tag: 'DAT', label: 'sistemas en archivo', value: '11' },
    { tag: 'DAT', label: 'en producción', value: '05' },
    { tag: 'DAT', label: 'tests verificados', value: '743' },
    { tag: 'NET', label: 'capturas montadas', value: '30' },
    { tag: 'GFX', label: 'contexto de render', value: '' },
    { tag: 'SEC', label: 'canal', value: 'establecido' }
  ];

  ngAfterViewInit() {
    // El registro dice la verdad sobre la maquina que lo esta leyendo.
    this.lines[6].value = this.narrative.hasWebGL() ? 'webgl2' : 'sin webgl';

    if (this.narrative.shouldSkipBoot()) {
      this.finish(true);
      return;
    }

    // Pase lo que pase con GSAP, a los 6 s se entra igual.
    this.failsafe = setTimeout(() => this.finish(true), 6000);

    try {
      this.run();
    } catch {
      this.finish(true);
    }
  }

  private run() {
    const name = 'VOLPINO_OS';
    const tl = gsap.timeline({ onComplete: () => this.finish(false) });
    this.tl = tl;

    // ---- ACTO I: la consola se dibuja y se escribe el nombre --------------
    this.act.set(1);
    tl.fromTo(this.consoleEl.nativeElement,
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' });

    const cursor = { i: 0 };
    tl.to(cursor, {
      i: name.length,
      duration: 0.5,
      ease: 'none',
      onUpdate: () => this.typed.set(name.slice(0, Math.round(cursor.i)))
    }, '-=0.1');

    // ---- ACTO II: migra al angulo mientras corre el registro --------------
    tl.add(() => this.act.set(2), '+=0.12');

    // El destino son las coordenadas reales del encabezado, no un numero magico.
    const dest = this.headerSlot();
    tl.to(this.consoleEl.nativeElement, {
      x: dest.x,
      y: dest.y,
      scale: dest.scale,
      duration: 0.95,
      ease: 'expo.inOut'
    });

    // Las lineas entran mientras viaja: el movimiento y el registro son
    // simultaneos, que es lo que hace que se sienta un sistema arrancando
    // y no dos animaciones pegadas.
    this.lines.forEach((_, i) => {
      tl.add(() => this.shown.set(i + 1), i === 0 ? '-=0.85' : '+=0.055');
    });

    // ---- ACTO III: aterriza y cede el lugar -------------------------------
    tl.add(() => this.act.set(3), '+=0.1');
    tl.to(this.shellEl.nativeElement, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut'
    }, '+=0.15');
  }

  /**
   * Donde tiene que aterrizar la consola: la posicion real del encabezado.
   * Se mide en vez de estimarse, asi el aterrizaje calza en cualquier ancho.
   */
  private headerSlot(): { x: number; y: number; scale: number } {
    const el = this.consoleEl.nativeElement;
    const r = el.getBoundingClientRect();
    const target = document.querySelector('.console-anchor')?.getBoundingClientRect();

    const tx = target ? target.left : 28;
    const ty = target ? target.top : 20;
    const scale = 0.42;

    // El origen del transform es el centro, asi que hay que compensar el
    // encogimiento para que la esquina superior izquierda quede donde va.
    return {
      x: tx - r.left - (r.width * (1 - scale)) / 2,
      y: ty - r.top - (r.height * (1 - scale)) / 2,
      scale
    };
  }

  /** Cualquier interaccion saltea el arranque. */
  @HostListener('document:keydown', ['$event'])
  @HostListener('document:pointerdown')
  skip(ev?: KeyboardEvent) {
    if (ev && (ev.metaKey || ev.ctrlKey || ev.altKey)) return;
    this.finish(true);
  }

  private finish(_immediate: boolean) {
    if (this.done) return;
    this.done = true;
    clearTimeout(this.failsafe);
    this.tl?.kill();
    this.narrative.markBooted();

    this.narrative.setPhase('INTERFACE');
  }

  ngOnDestroy() {
    clearTimeout(this.failsafe);
    this.tl?.kill();
  }
}

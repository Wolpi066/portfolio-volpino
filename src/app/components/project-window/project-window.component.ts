import {
  Component, ElementRef, ViewChild, AfterViewInit, OnDestroy,
  inject, input, output, signal, HostBinding
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { useGsap } from '../../core/gsap';
import { WindowsService, WinState } from '../../services/windows.service';
import { I18nService } from '../../services/i18n.service';
import { Shot, ProjectStatus } from '../../models/portfolio.models';

/** Velocidad (px/ms) desde la cual un tiron cuenta como descarte sin importar distancia. */
const FLICK = 0.5;
const MIN_W = 340;
const MIN_H = 260;

/**
 * Una ventana de proyecto.
 *
 * Escritorio: se arrastra de la barra de titulo con inercia al soltar y
 * resistencia —no pared— en los bordes; se redimensiona de la esquina; se
 * apila por foco.
 *
 * Telefono: no hay ventanas. Es una hoja que sube desde abajo y se cierra
 * arrastrandola, donde un tiron rapido alcanza aunque no llegue al umbral.
 *
 * El arrastre nunca es la unica via: la barra es enfocable, las flechas la
 * mueven y Escape cierra.
 */
@Component({
  selector: 'app-project-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.css']
})
export class ProjectWindowComponent implements AfterViewInit, OnDestroy {
  win = input.required<WinState>();
  isMobile = input<boolean>(false);
  lightbox = output<Shot>();

  private wm = inject(WindowsService);
  public i18n = inject(I18nService);

  @ViewChild('frame') frame!: ElementRef<HTMLElement>;
  @ViewChild('bar') bar!: ElementRef<HTMLElement>;
  @ViewChild('grip') grip!: ElementRef<HTMLElement>;
  @ViewChild('scan') scan!: ElementRef<HTMLElement>;
  @ViewChild('title') title!: ElementRef<HTMLElement>;

  dragging = signal(false);

  private drags: { kill(): void }[] = [];

  @HostBinding('style.z-index') get z() { return this.win().z; }

  get active() { return this.wm.activeId() === this.win().id; }

  ngAfterViewInit() {
    const { gsap } = useGsap();
    const el = this.frame.nativeElement;

    if (!this.isMobile()) {
      // La posicion vive en el transform, no en left/top: el arrastre y el
      // estado hablan el mismo idioma y todo queda en el compositor.
      gsap.set(el, { x: this.win().x, y: this.win().y });
    }

    const origin = this.win().origin;

    if (!this.isMobile() && origin) {
      // La ventana MORFEA desde la tarjeta que la abrio: se estira desde su
      // rectangulo hasta el propio. Con transformOrigin en 0 0, x/y son la
      // esquina superior izquierda y la cuenta cierra sola.
      const w = this.win();
      gsap.fromTo(el,
        {
          x: origin.left, y: origin.top,
          scaleX: origin.width / w.w, scaleY: origin.height / w.h,
          opacity: 0.55, transformOrigin: '0 0'
        },
        {
          x: w.x, y: w.y, scaleX: 1, scaleY: 1, opacity: 1,
          duration: 0.52, ease: 'expo.out',
          // El origen vuelve al centro: si no, el cierre encoge hacia la esquina.
          onComplete: () => gsap.set(el, { transformOrigin: '50% 50%' })
        });

      this.bootWindow(gsap, el);
    } else {
      // Nada aparece de la nada: arranca casi entero, no desde escala cero.
      gsap.fromTo(el,
        { opacity: 0, scale: this.isMobile() ? 1 : 0.96, yPercent: this.isMobile() ? 100 : 0 },
        {
          opacity: 1, scale: 1, yPercent: 0,
          duration: this.isMobile() ? 0.42 : 0.28,
          ease: this.isMobile() ? 'expo.out' : 'power3.out'
        });
    }

    this.isMobile() ? this.setupSheet(el) : this.setupWindow(el);
  }

  /**
   * La ventana no aparece: arranca.
   *
   * Mientras el marco todavia esta creciendo desde la tarjeta, un barrido
   * recorre el panel de arriba abajo, el contenido se revela detras de el con
   * un limpiado, y el titulo se resuelve desde caracteres revueltos. Los tres
   * gestos son de una pantalla encendiendose, que es lo que este sitio dice
   * ser — y es lo que lo distingue de un modal que hace escala y opacidad.
   */
  private bootWindow(gsap: typeof import('gsap').gsap, el: HTMLElement) {
    const body = el.querySelector('.body') as HTMLElement | null;
    const scan = this.scan?.nativeElement;
    const title = this.title?.nativeElement;

    if (scan) {
      gsap.fromTo(scan,
        { top: 0, opacity: 0 },
        {
          top: '100%', opacity: 1, duration: 0.5, delay: 0.12, ease: 'power2.inOut',
          onComplete: () => gsap.to(scan, { opacity: 0, duration: 0.18 })
        });
    }

    if (body) {
      // El limpiado va detras del barrido: el contenido aparece donde la
      // linea ya paso, no antes.
      gsap.fromTo(body,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0.4 },
        { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 0.52, delay: 0.14, ease: 'power2.inOut' });
    }

    if (title) {
      gsap.to(title, {
        duration: 0.55, delay: 0.16, ease: 'none',
        scrambleText: { text: this.win().project.name, chars: 'upperCase', speed: 0.7, revealDelay: 0.12 }
      });
    }
  }

  // ---- Escritorio ---------------------------------------------------------
  private setupWindow(el: HTMLElement) {
    const { Draggable } = useGsap();
    const self = this;

    this.drags.push(Draggable.create(el, {
      type: 'x,y',
      trigger: this.bar.nativeElement,
      inertia: true,
      edgeResistance: 0.82,
      bounds: {
        minX: -40, minY: 44,
        maxX: window.innerWidth - 140,
        maxY: window.innerHeight - 96
      },
      onPress() { self.wm.focus(self.win().id); self.dragging.set(true); },
      onRelease() { self.dragging.set(false); },
      onDragEnd() { self.save(el); },
      onThrowComplete() { self.save(el); }
    })[0]);

    // Redimensionado desde la esquina.
    let w0 = 0, h0 = 0;
    this.drags.push(Draggable.create(this.grip.nativeElement, {
      type: 'x,y',
      onPress() {
        self.wm.focus(self.win().id);
        w0 = el.offsetWidth;
        h0 = el.offsetHeight;
      },
      onDrag() {
        el.style.width = Math.max(MIN_W, w0 + this['x']) + 'px';
        el.style.height = Math.max(MIN_H, h0 + this['y']) + 'px';
      },
      onDragEnd() {
        useGsap().gsap.set(self.grip.nativeElement, { x: 0, y: 0 });
        self.save(el);
      }
    })[0]);
  }

  // ---- Telefono ------------------------------------------------------------
  private setupSheet(el: HTMLElement) {
    const { gsap, Draggable } = useGsap();
    const self = this;
    let t0 = 0;

    this.drags.push(Draggable.create(el, {
      type: 'y',
      trigger: this.bar.nativeElement,
      inertia: false,
      bounds: { minY: 0, maxY: window.innerHeight },
      edgeResistance: 0.9,
      onPress() { t0 = Date.now(); self.dragging.set(true); },
      onRelease() { self.dragging.set(false); },
      onDragEnd() {
        const velocity = Math.abs(this['y']) / Math.max(Date.now() - t0, 1);
        if (this['y'] > el.offsetHeight * 0.35 || velocity > FLICK) {
          self.close();
        } else {
          gsap.to(el, { y: 0, duration: 0.32, ease: 'power3.out' });
        }
      }
    })[0]);
  }

  private save(el: HTMLElement) {
    if (this.isMobile()) return;
    const { gsap } = useGsap();
    this.wm.setGeometry(this.win().id, {
      x: Math.round(gsap.getProperty(el, 'x') as number),
      y: Math.round(gsap.getProperty(el, 'y') as number),
      w: el.offsetWidth,
      h: el.offsetHeight
    });
  }

  /** Las flechas mueven la ventana cuando la barra tiene el foco. */
  onBarKey(ev: KeyboardEvent) {
    if (this.isMobile()) return;
    const step = ev.shiftKey ? 40 : 12;
    const map: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0], ArrowRight: [step, 0],
      ArrowUp: [0, -step], ArrowDown: [0, step]
    };
    const d = map[ev.key];
    if (!d) return;
    ev.preventDefault();
    const { gsap } = useGsap();
    const el = this.frame.nativeElement;
    gsap.set(el, {
      x: (gsap.getProperty(el, 'x') as number) + d[0],
      y: Math.max(44, (gsap.getProperty(el, 'y') as number) + d[1])
    });
    this.save(el);
  }

  close() {
    const { gsap } = useGsap();
    // La salida siempre mas rapida que la entrada.
    gsap.to(this.frame.nativeElement, {
      opacity: 0,
      scale: this.isMobile() ? 1 : 0.97,
      yPercent: this.isMobile() ? 100 : 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => this.wm.close(this.win().id)
    });
  }

  minimize() { this.wm.minimize(this.win().id); }
  toggleMax() { this.wm.toggleMax(this.win().id); }
  focus() { if (!this.active) this.wm.focus(this.win().id); }

  statusLabel(s: ProjectStatus): string {
    const t = this.i18n.t();
    const map: Record<ProjectStatus, string> = {
      PRODUCTION: t.statusPRODUCTION,
      DELIVERED: t.statusDELIVERED,
      DEPLOYED: t.statusDEPLOYED,
      IN_DEVELOPMENT: t.statusIN_DEVELOPMENT,
      PROTOTYPE: t.statusPROTOTYPE,
      ARCHIVED: t.statusARCHIVED
    };
    return map[s] ?? s;
  }

  ngOnDestroy() {
    this.drags.forEach(d => d.kill());
  }
}

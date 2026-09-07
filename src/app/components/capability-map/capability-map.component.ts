import {
  Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { I18nService } from '../../services/i18n.service';
import { WindowsService } from '../../services/windows.service';
import { techTokens } from '../../core/tech-tokens';
import { Project, Skill } from '../../models/portfolio.models';
import { ForceGraph, GNode, GLink } from './force';

const COL = {
  group: '#ffb259',
  cap: '#8b95a4',
  capOn: '#ffc98a',
  live: '#46d98a',
  work: '#5fa8ff',
  wip: '#ffca4a',
  arch: '#7c8695',
  link: 'rgba(140,155,175,0.16)',
  linkOn: 'rgba(255,178,89,0.62)',
  text: '#e7eaf0',
  dim: '#6b7583'
};

/**
 * MAPA DE CAPACIDADES
 *
 * Un grafo de fuerzas con tres niveles: las cuatro areas, las capacidades
 * que cuelgan de cada una, y los once sistemas. Una arista entre capacidad y
 * sistema significa que ese sistema la usa de verdad — sale del techStack,
 * no de una lista escrita a mano.
 *
 * Se arrastra cualquier nodo y el resto se reacomoda solo. Al pasar por
 * encima, el vecindario se enciende y todo lo demas se apaga: eso es lo que
 * convierte una maraña en una respuesta.
 *
 * Se dibuja en canvas y el lazo de animacion NO toca Angular: escribir
 * signals por cuadro dispara deteccion de cambios en toda la aplicacion.
 * Lo unico que sube a signals es el nodo enfocado, que cambia al ritmo del
 * puntero y no del reloj.
 */
@Component({
  selector: 'app-capability-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capability-map.component.html',
  styleUrls: ['./capability-map.component.css']
})
export class CapabilityMapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cv', { static: true }) cv!: ElementRef<HTMLCanvasElement>;
  @ViewChild('box', { static: true }) box!: ElementRef<HTMLElement>;

  private data = inject(DataService);
  private wm = inject(WindowsService);
  public i18n = inject(I18nService);

  /** Lo que se lee debajo del lienzo. */
  focus = signal<{ label: string; kind: string; detail: string } | null>(null);

  private g!: ForceGraph;
  private ctx!: CanvasRenderingContext2D;
  private raf = 0;
  private dpr = 1;
  private w = 0;
  private h = 0;

  private hot: GNode | null = null;
  private dragging: GNode | null = null;
  private downAt = { x: 0, y: 0, moved: false };
  /** Intensidad del resaltado, animada aparte para que entre suave. */
  private glow = 0;
  private ro?: ResizeObserver;

  /** La misma informacion en texto, para lector de pantalla y teclado. */
  rows: { name: string; used: string[] }[] = [];

  constructor() {
    // Los datos se arman antes del primer render: si se arman en
    // ngAfterViewInit, la plantilla ya leyo la lista vacia y Angular avisa
    // que la expresion cambio despues de haber sido verificada.
    this.build();
  }

  ngAfterViewInit() {
    this.ctx = this.cv.nativeElement.getContext('2d')!;
    this.resize();
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(this.box.nativeElement);
    this.raf = requestAnimationFrame(this.loop);
  }

  // =======================================================================
  private build() {
    const nodes: GNode[] = [];
    const links: GLink[] = [];
    const byId = new Map<string, GNode>();

    const add = (n: GNode) => { nodes.push(n); byId.set(n.id, n); return n; };
    // Semilla en circulo: arrancar todos en el centro hace que el primer
    // cuadro sea una explosion.
    const seed = (i: number, total: number, rad: number) => ({
      x: 320 + Math.cos((i / total) * Math.PI * 2) * rad,
      y: 210 + Math.sin((i / total) * Math.PI * 2) * rad
    });

    const t = this.i18n.t();
    const groups: [Skill['category'], string][] = [
      ['CORE', t.catCORE], ['BACKEND', t.catBACKEND],
      ['FRONTEND', t.catFRONTEND], ['TOOLS', t.catTOOLS]
    ];

    groups.forEach(([cat, label], i) => {
      add({
        id: 'g:' + cat, kind: 'group', label, color: COL.group, r: 9,
        ...seed(i, 4, 90), vx: 0, vy: 0, near: new Set()
      });
    });

    const projects = this.data.projects();
    projects.forEach((p, i) => {
      add({
        id: 's:' + p.id, kind: 'system', label: p.name,
        color: p.status === 'PRODUCTION' || p.status === 'DELIVERED' ? COL.live
          : p.status === 'IN_DEVELOPMENT' ? COL.wip
            : p.status === 'DEPLOYED' ? COL.work : COL.arch,
        r: 7, ...seed(i, projects.length, 250), vx: 0, vy: 0,
        payload: p, near: new Set()
      });
    });

    // Indice de tokens por proyecto: se calcula una vez, no por comparacion.
    const projTokens = projects.map(p => ({
      id: 's:' + p.id,
      tokens: new Set(p.techStack.flatMap(techTokens))
    }));

    this.data.skills().forEach((s, i) => {
      const id = 'c:' + s.name;
      const node = add({
        id, kind: 'cap', label: s.name, color: COL.cap, r: 4.2,
        ...seed(i, 38, 165), vx: 0, vy: 0, near: new Set()
      });

      // Rama al area: es lo que le da esqueleto al grafo y evita que las
      // capacidades sin sistema propio se vayan flotando al infinito.
      const grp = byId.get('g:' + s.category)!;
      links.push({ a: grp, b: node, len: 62, k: 0.035 });
      grp.near.add(id); node.near.add(grp.id);

      // Rama a cada sistema que la usa de verdad.
      const alts = techTokens(s.name);
      const used: string[] = [];
      for (const p of projTokens) {
        if (!alts.some(a => p.tokens.has(a))) continue;
        const sys = byId.get(p.id)!;
        links.push({ a: node, b: sys, len: 108, k: 0.018 });
        node.near.add(sys.id); sys.near.add(id);
        used.push(sys.label);
      }
      this.rows.push({ name: s.name, used });
      // Cuanto mas se usa, mas grande: el peso se ve sin leer un numero.
      node.r = 4.2 + Math.min(used.length, 8) * 0.62;
    });

    this.g = new ForceGraph(nodes, links);
  }

  // =======================================================================
  private resize() {
    const el = this.box.nativeElement;
    this.w = el.clientWidth;
    this.h = el.clientHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const c = this.cv.nativeElement;
    c.width = Math.round(this.w * this.dpr);
    c.height = Math.round(this.h * this.dpr);
    c.style.width = this.w + 'px';
    c.style.height = this.h + 'px';
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.g.reheat(0.7);
  }

  private loop = () => {
    this.raf = requestAnimationFrame(this.loop);

    if (this.g.alpha > 0) this.g.step(this.w, this.h);

    // El resaltado sube y baja solo: sin esto el cambio es un corte seco.
    const target = this.hot ? 1 : 0;
    this.glow += (target - this.glow) * 0.16;

    this.draw();
  };

  private draw() {
    const c = this.ctx;
    c.clearRect(0, 0, this.w, this.h);

    const hotId = this.hot?.id;
    const on = (n: GNode) => !hotId || n.id === hotId || this.hot!.near.has(n.id);

    // ---- Aristas ------------------------------------------------------
    c.lineWidth = 1;
    for (const l of this.g.links) {
      const lit = hotId ? (l.a.id === hotId || l.b.id === hotId) : false;
      if (lit) continue;                       // las encendidas van despues, arriba
      c.strokeStyle = COL.link;
      c.globalAlpha = hotId ? 1 - this.glow * 0.72 : 1;
      c.beginPath();
      c.moveTo(l.a.x, l.a.y);
      c.lineTo(l.b.x, l.b.y);
      c.stroke();
    }

    for (const l of this.g.links) {
      if (!hotId || (l.a.id !== hotId && l.b.id !== hotId)) continue;
      c.strokeStyle = COL.linkOn;
      c.globalAlpha = this.glow;
      c.lineWidth = 1.4;
      c.beginPath();
      c.moveTo(l.a.x, l.a.y);
      c.lineTo(l.b.x, l.b.y);
      c.stroke();
    }
    c.lineWidth = 1;

    // ---- Nodos ---------------------------------------------------------
    for (const n of this.g.nodes) {
      const lit = on(n);
      c.globalAlpha = lit ? 1 : 1 - this.glow * 0.78;

      // Halo del nodo enfocado
      if (n.id === hotId) {
        c.beginPath();
        c.arc(n.x, n.y, n.r + 7 + this.glow * 3, 0, Math.PI * 2);
        c.fillStyle = 'rgba(255,178,89,0.13)';
        c.fill();
      }

      c.beginPath();
      c.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      c.fillStyle = n.kind === 'cap' && !lit ? COL.dim : n.color;
      c.fill();

      // Los sistemas llevan anillo: se distinguen de una capacidad de un vistazo.
      if (n.kind === 'system' || n.kind === 'group') {
        c.beginPath();
        c.arc(n.x, n.y, n.r + 3.5, 0, Math.PI * 2);
        c.strokeStyle = n.color;
        c.globalAlpha = (lit ? 0.55 : 0.2) * (n.kind === 'group' ? 1 : 0.85);
        c.stroke();
      }
    }

    // ---- Etiquetas ------------------------------------------------------
    // Solo areas y sistemas siempre; las capacidades, al enfocarlas. Con las
    // treinta y ocho a la vez esto es una maraña ilegible.
    c.textBaseline = 'middle';
    for (const n of this.g.nodes) {
      const isCap = n.kind === 'cap';
      const show = !isCap || n.id === hotId || (hotId && this.hot!.near.has(n.id));
      if (!show) continue;

      const lit = on(n);
      c.globalAlpha = lit ? 1 : 1 - this.glow * 0.85;
      c.font = n.kind === 'group'
        ? '600 11px "JetBrains Mono", monospace'
        : n.kind === 'system'
          ? '500 10.5px "JetBrains Mono", monospace'
          : '10px "JetBrains Mono", monospace';
      c.fillStyle = n.kind === 'group' ? COL.group : n.kind === 'system' ? COL.text : COL.capOn;
      c.fillText(n.label, n.x + n.r + 7, n.y);
    }
    c.globalAlpha = 1;
  }

  // =======================================================================
  private local(e: PointerEvent) {
    const r = this.cv.nativeElement.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  onDown(e: PointerEvent) {
    const { x, y } = this.local(e);
    const n = this.g.pick(x, y);
    this.downAt = { x: e.clientX, y: e.clientY, moved: false };
    if (!n) return;
    this.dragging = n;
    n.pinned = true;
    // Captura: si el puntero sale del lienzo, el arrastre sigue.
    this.cv.nativeElement.setPointerCapture(e.pointerId);
  }

  onMove(e: PointerEvent) {
    const { x, y } = this.local(e);

    if (this.dragging) {
      if (Math.hypot(e.clientX - this.downAt.x, e.clientY - this.downAt.y) > 4) {
        this.downAt.moved = true;
      }
      const pad = this.dragging.r + 14;
      this.dragging.x = Math.max(pad, Math.min(this.w - pad, x));
      this.dragging.y = Math.max(pad, Math.min(this.h - pad, y));
      this.g.reheat(0.6);
      return;
    }

    const n = this.g.pick(x, y);
    if (n === this.hot) return;
    this.hot = n;
    this.setFocus(n);
  }

  onUp(e: PointerEvent) {
    const d = this.dragging;
    if (d) {
      d.pinned = false;
      // Se suelta con la velocidad del gesto: sigue un poco y frena solo.
      this.g.reheat(0.75);
      this.dragging = null;
      try { this.cv.nativeElement.releasePointerCapture(e.pointerId); } catch { /* ya liberado */ }
    }

    // Un arrastre no es un clic.
    if (this.downAt.moved) return;
    const { x, y } = this.local(e);
    const n = this.g.pick(x, y);
    if (n?.kind === 'system' && n.payload) this.wm.open(n.payload as Project);
  }

  onLeave() {
    if (this.dragging) return;
    this.hot = null;
    this.focus.set(null);
  }

  private setFocus(n: GNode | null) {
    if (!n) { this.focus.set(null); return; }
    const t = this.i18n.t();

    if (n.kind === 'system') {
      const p = n.payload as Project;
      this.focus.set({ label: n.label, kind: t.mapSystem, detail: p.type });
      return;
    }
    if (n.kind === 'group') {
      this.focus.set({ label: n.label, kind: t.mapArea, detail: t.mapAreaHint });
      return;
    }
    const used = this.rows.find(r => r.name === n.label)?.used ?? [];
    this.focus.set({
      label: n.label,
      kind: t.mapCapability,
      detail: used.length ? used.join(' · ') : t.capAcademic
    });
  }

  /** Vuelve a repartir todo: util despues de despeinar el grafo arrastrando. */
  shuffle() {
    for (const n of this.g.nodes) {
      n.vx += (Math.random() - 0.5) * 90;
      n.vy += (Math.random() - 0.5) * 90;
    }
    this.g.reheat(1);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
    this.ro?.disconnect();
  }
}

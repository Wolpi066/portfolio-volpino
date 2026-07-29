import {
  Component, inject, OnInit, OnDestroy, ElementRef, ViewChildren,
  QueryList, AfterViewInit, signal, computed, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NarrativeService } from '../../services/narrative.service';
import { DataService } from '../../services/data.service';
import { I18nService } from '../../services/i18n.service';
import { Project, ProjectStatus } from '../../models/portfolio.models';

@Component({
  selector: 'app-main-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.css']
})
export class MainInterfaceComponent implements OnInit, AfterViewInit, OnDestroy {
  private narrative = inject(NarrativeService);
  public data = inject(DataService);
  public i18n = inject(I18nService);

  @ViewChildren('observeItem') observeItems!: QueryList<ElementRef>;

  observer!: IntersectionObserver;
  uptime = '00:00:00';
  private timer: any;

  expandedStudyIndex: number | null = null;
  isImageGlitching = false;
  private glitchTimeout: any;

  /** Proyecto abierto en el modal de detalle. */
  activeProject = signal<Project | null>(null);
  /** Captura ampliada sobre el modal. */
  lightboxImage = signal<string | null>(null);

  /** Booleano estable: si se bindea la expresion cruda, dev tira NG0100. */
  overlayOpen = computed(() => this.activeProject() !== null || this.lightboxImage() !== null);

  get skillsByCategory() {
    const t = this.i18n.t();
    const cats = ['CORE', 'BACKEND', 'FRONTEND', 'TOOLS'] as const;
    const labels: Record<typeof cats[number], string> = {
      CORE: t.catCORE, BACKEND: t.catBACKEND, FRONTEND: t.catFRONTEND, TOOLS: t.catTOOLS
    };
    const skills = this.data.skills();
    return cats.map(cat => ({
      name: labels[cat],
      items: skills.filter(s => s.category === cat)
    })).filter(group => group.items.length > 0);
  }

  statusLabel(status: ProjectStatus): string {
    const t = this.i18n.t();
    const map: Record<ProjectStatus, string> = {
      PRODUCTION: t.statusPRODUCTION,
      DELIVERED: t.statusDELIVERED,
      DEPLOYED: t.statusDEPLOYED,
      PROTOTYPE: t.statusPROTOTYPE
    };
    return map[status] ?? status;
  }

  ngOnInit() {
    let seconds = 0;
    this.timer = setInterval(() => {
      seconds++;
      const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      this.uptime = `${h}:${m}:${s}`;
    }, 1000);
  }

  ngAfterViewInit() {
    const options = { root: null, rootMargin: '0px', threshold: 0.1 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    this.observeAll();

    // Si Angular recrea nodos (por ejemplo al cambiar de idioma), los nuevos
    // nacen con opacity:0 y sin observar. Hay que volver a engancharlos o
    // quedan invisibles para siempre.
    this.observeItems.changes.subscribe(() => this.observeAll());

    this.scheduleNextGlitch();
  }

  private observeAll() {
    this.observeItems.forEach(item => {
      this.observer.observe(item.nativeElement);
    });
  }

  scheduleNextGlitch() {
    const randomDelay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
    this.glitchTimeout = setTimeout(() => {
      this.triggerGlitch();
    }, randomDelay);
  }

  triggerGlitch() {
    this.isImageGlitching = true;
    setTimeout(() => {
      this.isImageGlitching = false;
      this.scheduleNextGlitch();
    }, 500);
  }

  toggleStudy(index: number) {
    this.expandedStudyIndex = this.expandedStudyIndex === index ? null : index;
  }

  // --- Proyectos ---
  openProject(project: Project) {
    this.activeProject.set(project);
  }

  closeProject() {
    this.activeProject.set(null);
  }

  openLightbox(src: string) {
    this.lightboxImage.set(src);
  }

  closeLightbox() {
    this.lightboxImage.set(null);
  }

  /** Escape cierra primero la captura ampliada, despues el detalle. */
  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.lightboxImage()) {
      this.closeLightbox();
    } else if (this.activeProject()) {
      this.closeProject();
    }
  }

  /** Entrada a la vista orbital 3D (pasa por la secuencia de destruccion). */
  triggerOrbitSequence() {
    this.narrative.setPhase('TRAP');
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
    if (this.observer) this.observer.disconnect();
    if (this.glitchTimeout) clearTimeout(this.glitchTimeout);
  }
}

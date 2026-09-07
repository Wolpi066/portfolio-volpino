import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NarrativeService } from '../../services/narrative.service';
import { DataService } from '../../services/data.service';
import { I18nService } from '../../services/i18n.service';
import { WindowsService } from '../../services/windows.service';
import { Project, ProjectStatus } from '../../models/portfolio.models';
import { techTokens } from '../../core/tech-tokens';

@Component({
  selector: 'app-main-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.css']
})
export class MainInterfaceComponent implements OnInit, OnDestroy {
  private narrative = inject(NarrativeService);
  public data = inject(DataService);
  public i18n = inject(I18nService);
  public wm = inject(WindowsService);

  uptime = signal('00:00:00');
  /** Capacidad bajo el puntero: la matriz responde a ella. */
  activeSkill = signal<string | null>(null);
  openStudy = signal<number | null>(null);
  /** Se muestra si alguien intenta entrar al orbital sin WebGL. */
  orbitBlocked = signal(false);

  private timer?: ReturnType<typeof setInterval>;
  private seconds = 0;

  get skillsByCategory() {
    const t = this.i18n.t();
    const cats = ['CORE', 'BACKEND', 'FRONTEND', 'TOOLS'] as const;
    const labels: Record<typeof cats[number], string> = {
      CORE: t.catCORE, BACKEND: t.catBACKEND, FRONTEND: t.catFRONTEND, TOOLS: t.catTOOLS
    };
    const skills = this.data.skills();
    return cats
      .map(cat => ({
        name: labels[cat],
        items: skills
          .filter(s => s.category === cat)
          .map(s => ({ name: s.name, used: this.systemsUsing(s.name) }))
      }))
      .filter(g => g.items.length > 0);
  }

  /**
   * En cuales de los once sistemas se usa esta capacidad.
   *
   * Se cruza contra el techStack real de cada proyecto en vez de escribirse a
   * mano, asi la matriz no puede desincronizarse del contenido. La
   * comparacion es tolerante porque los nombres no coinciden literalmente:
   * la matriz dice "THREE.JS / WEBGL" y el stack dice "three.js".
   */
  systemsUsing(skill: string): string[] {
    const alts = techTokens(skill);
    if (!alts.length) return [];

    // Igualdad exacta entre tokens, no subcadenas: con subcadenas "JAVA"
    // matcheaba con "JavaScript", que es justo lo contrario de lo que dice.
    return this.data.projects()
      .filter(p => p.techStack.some(tech => techTokens(tech).some(t => alts.includes(t))))
      .map(p => p.name);
  }

  /** Los sistemas de la capacidad activa, para la linea de lectura. */
  get activeSkillSystems(): string[] {
    const s = this.activeSkill();
    return s ? this.systemsUsing(s) : [];
  }

  statusLabel(status: ProjectStatus): string {
    const t = this.i18n.t();
    const map: Record<ProjectStatus, string> = {
      PRODUCTION: t.statusPRODUCTION,
      DELIVERED: t.statusDELIVERED,
      DEPLOYED: t.statusDEPLOYED,
      IN_DEVELOPMENT: t.statusIN_DEVELOPMENT,
      PROTOTYPE: t.statusPROTOTYPE,
      ARCHIVED: t.statusARCHIVED
    };
    return map[status] ?? status;
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.seconds++;
      const h = Math.floor(this.seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((this.seconds % 3600) / 60).toString().padStart(2, '0');
      const s = (this.seconds % 60).toString().padStart(2, '0');
      this.uptime.set(`${h}:${m}:${s}`);
    }, 1000);
  }

  /**
   * Abrir un proyecto es abrir una ventana, y la ventana crece desde la
   * tarjeta: por eso viaja su rectangulo.
   */
  open(project: Project, ev: Event) {
    const card = (ev.currentTarget as HTMLElement)?.getBoundingClientRect();
    this.wm.open(project, card);
  }

  toggleStudy(i: number) {
    this.openStudy.update(cur => (cur === i ? null : i));
  }

  /**
   * Entrada al orbital. Si la maquina no tiene WebGL no se entra: antes se
   * entraba igual, la escena reventaba en silencio y no habia forma de volver.
   */
  enterOrbit() {
    if (!this.narrative.hasWebGL()) {
      this.orbitBlocked.set(true);
      return;
    }
    this.narrative.setPhase('ORBIT');
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}

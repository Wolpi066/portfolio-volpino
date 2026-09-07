import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NarrativeService } from '../../services/narrative.service';
import { DataService } from '../../services/data.service';
import { I18nService } from '../../services/i18n.service';
import { WindowsService } from '../../services/windows.service';
import { Project, ProjectStatus } from '../../models/portfolio.models';

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
      .map(cat => ({ name: labels[cat], items: skills.filter(s => s.category === cat) }))
      .filter(g => g.items.length > 0);
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

  /** Abrir un proyecto es abrir una ventana. */
  open(project: Project) {
    this.wm.open(project);
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

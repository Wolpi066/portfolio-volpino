import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectWindowComponent } from '../project-window/project-window.component';
import { WindowsService } from '../../services/windows.service';
import { DataService } from '../../services/data.service';
import { I18nService } from '../../services/i18n.service';
import { Shot } from '../../models/portfolio.models';

/**
 * La capa donde viven las ventanas: el apilado, la barra de tareas y el
 * visor de capturas ampliadas.
 *
 * Es hermana de la interfaz, no hija, para que abrir un proyecto no dependa
 * de donde este el scroll ni de que seccion se este mirando.
 */
@Component({
  selector: 'app-window-layer',
  standalone: true,
  imports: [CommonModule, ProjectWindowComponent],
  templateUrl: './window-layer.component.html',
  styleUrls: ['./window-layer.component.css']
})
export class WindowLayerComponent {
  wm = inject(WindowsService);
  data = inject(DataService);
  i18n = inject(I18nService);

  /** Debajo de este ancho no hay ventanas: hay hojas. */
  isMobile = signal(window.innerWidth < 760);
  zoom = signal<Shot | null>(null);

  constructor() {
    // La disposicion de la visita anterior, si el contenido sigue existiendo.
    this.wm.hydrate(this.data.projects());
    this.openFromUrl();

    // La ventana al frente queda en la URL, asi un proyecto se puede enlazar.
    // replaceState y no push: cambiar de ventana no deberia llenar el historial.
    effect(() => {
      const id = this.wm.activeId();
      const p = this.wm.windows().find(w => w.id === id)?.project;
      const hash = p ? '#/p/' + p.slug : '';
      if (location.hash !== hash) {
        history.replaceState(null, '', location.pathname + location.search + hash);
      }
    });
  }

  /** Abre el proyecto que venga en la URL al entrar. */
  private openFromUrl() {
    const h = location.hash;
    if (!h.startsWith('#/p/')) return;
    const slug = decodeURIComponent(h.slice(4));
    const p = this.data.projects().find(x => x.slug === slug);
    if (p) this.wm.open(p);
  }

  @HostListener('window:hashchange')
  onHashChange() { this.openFromUrl(); }

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth < 760);
    this.wm.reflow();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.zoom()) {
      this.zoom.set(null);
      return;
    }
    const id = this.wm.activeId();
    if (id) this.wm.close(id);
  }

  openZoom(s: Shot) { this.zoom.set(s); }
  closeZoom() { this.zoom.set(null); }
}

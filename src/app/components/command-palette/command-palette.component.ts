import {
  Component, ElementRef, ViewChild, HostListener, inject, signal, computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { I18nService } from '../../services/i18n.service';
import { WindowsService } from '../../services/windows.service';
import { NarrativeService } from '../../services/narrative.service';

interface Cmd {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void;
}

/**
 * Paleta de comandos (Ctrl/Cmd + K).
 *
 * Encaja con la ficcion de sistema operativo y resuelve un problema real:
 * once proyectos son muchos para llegar tabulando.
 *
 * No tiene animacion de apertura a proposito. Es una accion que se repite
 * decenas de veces; ahi cualquier transicion se siente lenta. Raycast tampoco
 * anima, y es la referencia del patron.
 */
@Component({
  selector: 'app-command-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './command-palette.component.html',
  styleUrls: ['./command-palette.component.css']
})
export class CommandPaletteComponent {
  private data = inject(DataService);
  private wm = inject(WindowsService);
  private narrative = inject(NarrativeService);
  public i18n = inject(I18nService);

  private field?: ElementRef<HTMLInputElement>;
  @ViewChild('field') set fieldRef(el: ElementRef<HTMLInputElement> | undefined) {
    this.field = el;
    // No alcanza con enfocar en show(): ahi el @if todavia no rendero el input.
    if (el) queueMicrotask(() => el.nativeElement.focus());
  }

  open = signal(false);
  query = signal('');
  cursor = signal(0);

  /** Quien tenia el foco antes de abrir, para devolverselo al cerrar. */
  private opener: HTMLElement | null = null;

  private commands = computed<Cmd[]>(() => {
    const t = this.i18n.t();
    const list: Cmd[] = [];

    for (const p of this.data.projects()) {
      list.push({
        id: 'p-' + p.id,
        group: t.cmdProjects,
        label: p.name,
        hint: p.type,
        run: () => this.wm.open(p)
      });
    }

    list.push(
      {
        id: 'orbit', group: t.cmdGo, label: t.orbitBtn,
        run: () => {
          if (this.narrative.hasWebGL()) this.narrative.setPhase('ORBIT');
        }
      },
      {
        id: 'profile', group: t.cmdGo, label: t.cmdTop,
        run: () => document.querySelector('.scroll')?.scrollTo({ top: 0, behavior: 'smooth' })
      },
      {
        id: 'projects', group: t.cmdGo, label: t.cmdProjectsSection,
        run: () => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
      },
      {
        id: 'lang', group: t.cmdSystem, label: t.cmdLang,
        hint: this.i18n.lang() === 'es' ? 'ES → EN' : 'EN → ES',
        run: () => this.i18n.toggle()
      },
      {
        id: 'closeall', group: t.cmdSystem, label: t.closeAll,
        run: () => this.wm.closeAll()
      },
      { id: 'cv', group: t.cmdSystem, label: t.btnCv, run: () => window.open(t.cvFile, '_blank') }
    );
    return list;
  });

  /** Coincidencia por subsecuencia: "hry" encuentra "Harry's". */
  results = computed(() => {
    const q = this.query().trim().toLowerCase();
    const all = this.commands();
    if (!q) return all;

    return all.filter(c => {
      const hay = (c.label + ' ' + (c.hint ?? '')).toLowerCase();
      let i = 0;
      for (const ch of q) {
        i = hay.indexOf(ch, i);
        if (i === -1) return false;
        i++;
      }
      return true;
    });
  });

  /** Los resultados agrupados, conservando el indice global para el cursor. */
  grouped = computed(() => {
    const out: { name: string; items: { cmd: Cmd; index: number }[] }[] = [];
    this.results().forEach((cmd, index) => {
      const last = out[out.length - 1];
      if (last && last.name === cmd.group) last.items.push({ cmd, index });
      else out.push({ name: cmd.group, items: [{ cmd, index }] });
    });
    return out;
  });

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this.open() ? this.close() : this.show();
      return;
    }
    if (!this.open()) return;

    if (e.key === 'Escape') { e.preventDefault(); this.close(); return; }

    const n = this.results().length;
    if (!n) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.cursor.update(c => (c + 1) % n);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.cursor.update(c => (c - 1 + n) % n);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      this.pick(this.cursor());
    }
  }

  show() {
    this.opener = document.activeElement as HTMLElement;
    this.query.set('');
    this.cursor.set(0);
    this.open.set(true);
  }

  close() {
    this.open.set(false);
    // El foco vuelve de donde salio: si no, se pierde al principio del documento.
    this.opener?.focus?.();
    this.opener = null;
  }

  pick(i: number) {
    const cmd = this.results()[i];
    if (!cmd) return;
    this.close();
    cmd.run();
  }

  onInput(v: string) {
    this.query.set(v);
    this.cursor.set(0);
  }
}

import { Injectable, computed, signal } from '@angular/core';
import { Project } from '../models/portfolio.models';

export interface WinState {
    id: string;
    project: Project;
    x: number;
    y: number;
    w: number;
    h: number;
    z: number;
    minimized: boolean;
    maximized: boolean;
    /** Geometria previa, para restaurar al desmaximizar. */
    prev?: { x: number; y: number; w: number; h: number };
}

const LAYOUT_KEY = 'volpino-layout';
const CASCADE = 30;
const MIN_W = 340;
const MIN_H = 260;

/**
 * Gestor de ventanas.
 *
 * Mantiene posicion, tamaño, apilado y minimizado de cada proyecto abierto,
 * y guarda la disposicion para la proxima visita. La fisica del arrastre vive
 * en el componente; aca solo esta el estado.
 */
@Injectable({ providedIn: 'root' })
export class WindowsService {
    private _windows = signal<WinState[]>([]);
    windows = this._windows.asReadonly();

    /** Las que se dibujan; las minimizadas viven solo en la barra. */
    visible = computed(() => this._windows().filter(w => !w.minimized));
    /** Cual tiene el foco: la de z mas alto entre las visibles. */
    activeId = computed(() => {
        const v = this.visible();
        return v.length ? v.reduce((a, b) => (a.z > b.z ? a : b)).id : null;
    });
    count = computed(() => this._windows().length);

    private topZ = 10;

    /** Abre el proyecto, o lo trae al frente si ya estaba. */
    open(project: Project) {
        const existing = this._windows().find(w => w.id === project.id);
        if (existing) {
            this.restore(project.id);
            this.focus(project.id);
            return;
        }

        const n = this._windows().length;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const w = Math.min(660, Math.max(MIN_W, vw - 120));
        const h = Math.min(560, Math.max(MIN_H, vh - 190));

        // En cascada desde el centro, y siempre dentro de la pantalla.
        const baseX = Math.max(16, (vw - w) / 2 - 90);
        const baseY = Math.max(64, (vh - h) / 2 - 50);

        this._windows.update(list => [...list, {
            id: project.id,
            project,
            x: this.clamp(baseX + n * CASCADE, 8, vw - w - 8),
            y: this.clamp(baseY + n * CASCADE, 56, vh - h - 8),
            w, h,
            z: ++this.topZ,
            minimized: false,
            maximized: false
        }]);
        this.persist();
    }

    close(id: string) {
        this._windows.update(l => l.filter(w => w.id !== id));
        this.persist();
    }

    closeAll() {
        this._windows.set([]);
        this.persist();
    }

    focus(id: string) {
        const top = ++this.topZ;
        this._windows.update(l => l.map(w => (w.id === id ? { ...w, z: top } : w)));
        this.persist();
    }

    minimize(id: string) {
        this._windows.update(l => l.map(w => (w.id === id ? { ...w, minimized: true } : w)));
        this.persist();
    }

    restore(id: string) {
        this._windows.update(l => l.map(w => (w.id === id ? { ...w, minimized: false } : w)));
        this.focus(id);
    }

    toggleMax(id: string) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        this._windows.update(l => l.map(w => {
            if (w.id !== id) return w;
            if (w.maximized && w.prev) {
                return { ...w, ...w.prev, maximized: false, prev: undefined };
            }
            return {
                ...w,
                prev: { x: w.x, y: w.y, w: w.w, h: w.h },
                x: 12, y: 56,
                w: vw - 24,
                h: vh - 56 - 12 - 40,
                maximized: true
            };
        }));
        this.persist();
    }

    /** Lo llama el componente al terminar de arrastrar o redimensionar. */
    setGeometry(id: string, geo: Partial<Pick<WinState, 'x' | 'y' | 'w' | 'h'>>) {
        this._windows.update(l => l.map(w => (w.id === id ? { ...w, ...geo } : w)));
        this.persist();
    }

    /** Reacomoda todo dentro de la pantalla cuando cambia el tamaño. */
    reflow() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        this._windows.update(l => l.map(w => {
            const width = Math.min(w.w, vw - 16);
            const height = Math.min(w.h, vh - 72);
            return {
                ...w,
                w: width,
                h: height,
                x: this.clamp(w.x, 8, Math.max(8, vw - width - 8)),
                y: this.clamp(w.y, 48, Math.max(48, vh - height - 8))
            };
        }));
    }

    /**
     * Restaura la disposicion guardada. Los proyectos llegan por parametro
     * porque el estado guardado solo tiene ids: el contenido puede haber
     * cambiado entre visitas y manda el del codigo, no el del navegador.
     */
    hydrate(projects: Project[]) {
        let saved: { id: string; x: number; y: number; w: number; h: number; minimized: boolean }[] = [];
        try {
            saved = JSON.parse(localStorage.getItem(LAYOUT_KEY) || '[]');
        } catch {
            return;
        }
        if (!Array.isArray(saved) || !saved.length) return;

        const byId = new Map(projects.map(p => [p.id, p]));
        const restored: WinState[] = [];
        for (const s of saved) {
            const p = byId.get(s.id);
            if (!p) continue;
            restored.push({
                id: p.id, project: p,
                x: s.x, y: s.y, w: s.w, h: s.h,
                z: ++this.topZ,
                minimized: !!s.minimized,
                maximized: false
            });
        }
        this._windows.set(restored);
        this.reflow();
    }

    private persist() {
        try {
            localStorage.setItem(LAYOUT_KEY, JSON.stringify(
                this._windows().map(w => ({ id: w.id, x: w.x, y: w.y, w: w.w, h: w.h, minimized: w.minimized }))
            ));
        } catch {
            // storage bloqueado: la disposicion no sobrevive, y no pasa nada
        }
    }

    private clamp(v: number, min: number, max: number) {
        return Math.min(Math.max(v, min), Math.max(min, max));
    }
}

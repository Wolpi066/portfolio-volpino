import { Injectable, signal } from '@angular/core';

export type PortfolioPhase = 'BOOT' | 'INTERFACE' | 'ORBIT';

const BOOTED_KEY = 'volpino-booted';

/**
 * Estado narrativo del sistema y las dos preguntas que deciden si una
 * secuencia puede correr: si la maquina tiene WebGL y si quien mira pidio
 * menos movimiento.
 */
@Injectable({ providedIn: 'root' })
export class NarrativeService {
    currentPhase = signal<PortfolioPhase>('BOOT');

    private webgl: boolean | null = null;

    setPhase(phase: PortfolioPhase) {
        this.currentPhase.set(phase);
    }

    /**
     * Hay WebGL? Se pregunta una sola vez y se guarda: crear contextos de
     * prueba es caro y algunos navegadores limitan cuantos se pueden abrir.
     *
     * De esto depende que se ofrezca o no la secuencia orbital. Antes no se
     * preguntaba, la escena reventaba en silencio y el visitante quedaba
     * atrapado en la fase de destruccion sin forma de volver.
     */
    hasWebGL(): boolean {
        if (this.webgl !== null) return this.webgl;
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
            this.webgl = !!gl;
            // Devolver el contexto enseguida: no lo necesitamos vivo.
            const lose = (gl as WebGLRenderingContext | null)?.getExtension('WEBGL_lose_context');
            lose?.loseContext();
        } catch {
            this.webgl = false;
        }
        return this.webgl;
    }

    prefersReducedMotion(): boolean {
        try {
            return matchMedia('(prefers-reduced-motion: reduce)').matches;
        } catch {
            return false;
        }
    }

    /** El arranque es identidad, no un peaje: una vez por sesion y nada mas. */
    shouldSkipBoot(): boolean {
        if (this.prefersReducedMotion()) return true;
        try {
            return sessionStorage.getItem(BOOTED_KEY) === '1';
        } catch {
            return false;
        }
    }

    markBooted() {
        try {
            sessionStorage.setItem(BOOTED_KEY, '1');
        } catch {
            // incognito o storage bloqueado: que arranque de nuevo no rompe nada
        }
    }
}

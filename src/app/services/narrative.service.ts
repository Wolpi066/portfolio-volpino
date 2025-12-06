import { Injectable, signal } from '@angular/core';

export type PortfolioPhase = 'BOOT' | 'INTERFACE' | 'TRAP' | 'DESTRUCTION' | 'REBIRTH';

@Injectable({
    providedIn: 'root'
})
export class NarrativeService {
    currentPhase = signal<PortfolioPhase>('BOOT');

    // Agregamos esto para guardar la captura de pantalla
    capturedScreen = signal<string | null>(null);

    constructor() { }

    setPhase(phase: PortfolioPhase) {
        console.log(`[SYSTEM_LOG]: Switching to phase -> ${phase}`);
        this.currentPhase.set(phase);
    }
}
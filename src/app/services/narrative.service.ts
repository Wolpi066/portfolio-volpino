import { Injectable, signal } from '@angular/core';

export type PortfolioPhase = 'BOOT' | 'INTERFACE' | 'TRAP' | 'DESTRUCTION' | 'REBIRTH';

@Injectable({
    providedIn: 'root'
})
export class NarrativeService {
    // Usamos Signals para reactividad instantánea
    currentPhase = signal<PortfolioPhase>('BOOT');

    constructor() { }

    setPhase(phase: PortfolioPhase) {
        console.log(`[SYSTEM_LOG]: Switching to phase -> ${phase}`);
        this.currentPhase.set(phase);
    }
}
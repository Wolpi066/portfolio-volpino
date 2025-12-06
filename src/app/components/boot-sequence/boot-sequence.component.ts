// UBICACIÓN: src/app/components/boot-sequence/boot-sequence.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NarrativeService } from '../../services/narrative.service';

@Component({
  selector: 'app-boot-sequence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boot-sequence.component.html',
  styleUrls: ['./boot-sequence.component.css'] // Asegúrate que el archivo CSS exista también
})
// IMPORTANTE: Debe decir "export class"
export class BootSequenceComponent implements OnInit {
  private narrative = inject(NarrativeService);

  progress = 0;
  currentLog = '';

  logs: string[] = [
    "Initializing Angular Core...",
    "Loading Geometry Engine...",
    "Mounting Virtual DOM...",
    "Decrypting User_Profile: Volpino...",
    "Establishing Secure Connection...",
    "System Ready."
  ];

  ngOnInit() {
    this.startBootSequence();
  }

  startBootSequence() {
    let logIndex = 0;

    // Simulación de carga
    const interval = setInterval(() => {
      // Incremento aleatorio para parecer real
      this.progress += Math.floor(Math.random() * 5) + 1;

      // Actualizar logs basado en progreso
      if (this.progress > 20 && logIndex === 0) { this.currentLog = this.logs[1]; logIndex++; }
      if (this.progress > 40 && logIndex === 1) { this.currentLog = this.logs[2]; logIndex++; }
      if (this.progress > 60 && logIndex === 2) { this.currentLog = this.logs[3]; logIndex++; }
      if (this.progress > 80 && logIndex === 3) { this.currentLog = this.logs[4]; logIndex++; }
      if (this.progress > 95 && logIndex === 4) { this.currentLog = this.logs[5]; logIndex++; }

      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          // TERMINÓ LA CARGA -> CAMBIAR FASE
          this.narrative.setPhase('INTERFACE');
        }, 800);
      }
    }, 50); // Velocidad del loader
  }
}
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NarrativeService } from '../../services/narrative.service';
import { DataService } from '../../services/data.service';

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

  uptime = '00:00:00';
  private timer: any;

  ngOnInit() {
    // Simular reloj de tiempo de actividad
    let seconds = 0;
    this.timer = setInterval(() => {
      seconds++;
      const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      this.uptime = `${h}:${m}:${s}`;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  // EL BOTÓN TRAMPA (Para la Fase 3)
  triggerSystemReset() {
    this.narrative.setPhase('TRAP');
  }
}
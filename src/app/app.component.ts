import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NarrativeService } from './services/narrative.service';
// Importamos tus componentes
import { BootSequenceComponent } from './components/boot-sequence/boot-sequence.component';
import { MainInterfaceComponent } from './components/main-interface/main-interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importante: Aquí declaramos qué componentes usa el HTML
  imports: [CommonModule, RouterOutlet, BootSequenceComponent, MainInterfaceComponent],
  templateUrl: 'app.component.html', // <--- Apuntamos al archivo HTML
  styleUrls: ['app.component.css']
})
export class AppComponent {
  narrative = inject(NarrativeService);
}
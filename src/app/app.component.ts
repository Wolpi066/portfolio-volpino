import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NarrativeService } from './services/narrative.service';

// --- TUS COMPONENTES ---
import { BootSequenceComponent } from './components/boot-sequence/boot-sequence.component';
import { MainInterfaceComponent } from './components/main-interface/main-interface.component';
import { SystemTrapComponent } from './components/system-trap/system-trap.component'; // <--- (Asegúrate de tener este también si usas la trampa)
import { VoxelDestructionComponent } from './components/voxel-destruction/voxel-destruction.component'; // <--- AGREGAR ESTE IMPORT
import { HoloRebirthComponent } from './components/holo-rebirth/holo-rebirth.component';
import { TechCursorComponent } from "./components/tech-cursor/tech-cursor.component"; // <--- NUEVO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BootSequenceComponent,
    MainInterfaceComponent,
    SystemTrapComponent, // <--- AGREGAR AQUÍ
    VoxelDestructionComponent, // <--- Y AGREGAR AQUÍ
    HoloRebirthComponent, // <--- NUEVO
    TechCursorComponent
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  narrative = inject(NarrativeService);
}
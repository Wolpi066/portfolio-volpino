import { Component, inject } from '@angular/core';
import { NarrativeService } from './services/narrative.service';
import { I18nService } from './services/i18n.service';

import { BootSequenceComponent } from './components/boot-sequence/boot-sequence.component';
import { MainInterfaceComponent } from './components/main-interface/main-interface.component';
import { HoloRebirthComponent } from './components/holo-rebirth/holo-rebirth.component';
import { TechCursorComponent } from './components/tech-cursor/tech-cursor.component';
import { WindowLayerComponent } from './components/window-layer/window-layer.component';
import { CommandPaletteComponent } from './components/command-palette/command-palette.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BootSequenceComponent,
    MainInterfaceComponent,
    HoloRebirthComponent,
    TechCursorComponent,
    WindowLayerComponent,
    CommandPaletteComponent
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  narrative = inject(NarrativeService);
  i18n = inject(I18nService);
}

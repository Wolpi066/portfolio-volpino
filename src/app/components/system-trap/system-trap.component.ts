import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NarrativeService } from '../../services/narrative.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-system-trap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-trap.component.html',
  styleUrls: ['./system-trap.component.css']
})
export class SystemTrapComponent {
  private narrative = inject(NarrativeService);
  isProcessing = false;
  isHidden = false;

  confirmWipe() {
    if (this.isProcessing) return;
    this.isProcessing = true;
    this.isHidden = true;

    const safetyTimer = setTimeout(() => {
      if (this.narrative.currentPhase() !== 'DESTRUCTION') {
        console.warn("Capture timeout - Forcing destruction");
        this.narrative.setPhase('DESTRUCTION');
      }
    }, 1500);

    setTimeout(() => {
      html2canvas(document.body, {
        scale: 1,
        useCORS: true,
        logging: false,
        backgroundColor: '#0a0a0a',
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        x: window.scrollX,
        y: window.scrollY,
        width: window.innerWidth,
        height: window.innerHeight,
        ignoreElements: (element) => element.classList.contains('trap-overlay')
      }).then(canvas => {
        clearTimeout(safetyTimer);
        const imgData = canvas.toDataURL('image/png');
        this.narrative.capturedScreen.set(imgData);
        this.narrative.setPhase('DESTRUCTION');
      }).catch(err => {
        console.error("Error capturing:", err);
      });
    }, 100);
  }
}
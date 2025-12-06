import { Component, inject, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
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
export class MainInterfaceComponent implements OnInit, AfterViewInit, OnDestroy {
  private narrative = inject(NarrativeService);
  public data = inject(DataService);

  @ViewChildren('observeItem') observeItems!: QueryList<ElementRef>;

  observer!: IntersectionObserver;
  uptime = '00:00:00';
  private timer: any;

  expandedStudyIndex: number | null = null;
  isImageGlitching = false;
  private glitchTimeout: any;

  // Getter para agrupar las skills automáticamente por categoría
  get skillsByCategory() {
    const cats = ['CORE', 'FRONTEND', 'BACKEND', 'TOOLS'] as const;
    return cats.map(cat => ({
      name: cat,
      items: this.data.skills.filter(s => s.category === cat)
    })).filter(group => group.items.length > 0); // Solo mostrar si tiene items
  }

  ngOnInit() {
    let seconds = 0;
    this.timer = setInterval(() => {
      seconds++;
      const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      this.uptime = `${h}:${m}:${s}`;
    }, 1000);
  }

  ngAfterViewInit() {
    // Configuración del Observer para animaciones
    const options = {
      root: null, // Viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% visible activa la animación
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Opcional: Dejar de observar una vez animado para rendimiento
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    this.observeItems.forEach(item => {
      this.observer.observe(item.nativeElement);
    });

    // Iniciar glitch de foto
    this.scheduleNextGlitch();
  }

  scheduleNextGlitch() {
    const randomDelay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
    this.glitchTimeout = setTimeout(() => {
      this.triggerGlitch();
    }, randomDelay);
  }

  triggerGlitch() {
    this.isImageGlitching = true;
    setTimeout(() => {
      this.isImageGlitching = false;
      this.scheduleNextGlitch();
    }, 500);
  }

  toggleStudy(index: number) {
    if (this.expandedStudyIndex === index) {
      this.expandedStudyIndex = null;
    } else {
      this.expandedStudyIndex = index;
    }
  }

  triggerSystemReset() {
    this.narrative.setPhase('TRAP');
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
    if (this.observer) this.observer.disconnect();
    if (this.glitchTimeout) clearTimeout(this.glitchTimeout);
  }
}
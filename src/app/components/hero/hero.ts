import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  constructor(public lang: LanguageService) {}

private getTitles(): string[] {
  if (this.lang.isArabic()) {
    return [
      'مهندس برمجيات',
      'مطور ويب متكامل',
      'مصمم UI/UX',
    ];
  }
  return [
    'Software Engineer',
    'Full-Stack Developer',
    'UI/UX Designer',
  ];
}

  private currentIndex = 0;
  private currentText = '';
  private isDeleting = false;
  private typeInterval: any;
  
currentUrl: string = '';

  ngOnInit() {
    this.currentUrl = window.location.origin;
    setTimeout(() => this.startTyping(), 500);
  }

 

  ngOnDestroy() {
    clearTimeout(this.typeInterval);
  }

  startTyping() {
    const current = this.getTitles()[this.currentIndex];
    const el = document.querySelector('.typing-text');
    if (!el) {
      this.typeInterval = setTimeout(() => this.startTyping(), 100);
      return;
    }
    if (!this.isDeleting) {
      this.currentText = current.substring(0, this.currentText.length + 1);
    } else {
      this.currentText = current.substring(0, this.currentText.length - 1);
    }
    el.textContent = this.currentText;
    let speed = this.isDeleting ? 80 : 120;
    if (!this.isDeleting && this.currentText === current) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.getTitles().length;
      speed = 500;
    }
    this.typeInterval = setTimeout(() => this.startTyping(), speed);
  }
}
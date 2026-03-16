import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public lang: LanguageService) {}
}
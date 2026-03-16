import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  constructor(public lang: LanguageService) {}
}
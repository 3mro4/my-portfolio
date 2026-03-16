import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  constructor(public lang: LanguageService) {}
}
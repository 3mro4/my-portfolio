import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public lang: LanguageService) {}

  closeNavbar() {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse?.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }
 }
}
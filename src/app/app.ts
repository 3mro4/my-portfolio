import { Component, OnInit, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Experience, Education, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  ngOnInit() {
  setTimeout(() => this.initScrollReveal(), 600);
  }

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }
}

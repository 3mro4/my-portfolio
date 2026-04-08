import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  observe(selector: string, animationClass: string = 'animate') {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target); // animate only once
        }
      });
    }, {
      threshold: 0.15 // trigger when 15% of element is visible
    });

    elements.forEach(el => observer.observe(el));
  }
}
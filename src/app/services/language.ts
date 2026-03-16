import { Injectable, signal } from '@angular/core';
import { translations } from '../data/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // Current language — 'en' or 'ar'
  currentLang = signal<'en' | 'ar'>('en');

  // Current translations based on language
  t = signal(translations['en']);

  // Toggle between EN and AR
  toggleLanguage() {
    const newLang = this.currentLang() === 'en' ? 'ar' : 'en';
    this.currentLang.set(newLang);
    this.t.set(translations[newLang]);

    // Switch page direction RTL/LTR
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  }

  // Check if current language is Arabic
  isArabic() {
    return this.currentLang() === 'ar';
  }
}
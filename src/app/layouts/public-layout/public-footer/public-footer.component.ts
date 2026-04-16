import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-public-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: 'public-footer.component.html',
  styleUrl: 'public-footer.component.css'
})
export class PublicFooterComponent {
  currentYear = new Date().getFullYear();

  scrollTo(section: string){
    const element = document.getElementById(section);
    if(element){
      const offset = 30 //hauteur du header
      const y = element.getBoundingClientRect().top + window.scrollY -offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
}

import {Component} from '@angular/core';
import {ScrollReveal} from '../../../../../directives/scroll-reveal';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ScrollReveal, RouterLink],
  templateUrl: 'hero-section.component.html',
  styleUrl: 'hero-section.component.css'
})

export class HeroSectionComponent{

}

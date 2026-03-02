import {Component} from '@angular/core';
import {HeroSectionComponent} from './sections/hero-section/hero-section.component';

@Component({
  selector:'app-landing',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: 'landing.component.html'
})

export class LandingComponent{

}

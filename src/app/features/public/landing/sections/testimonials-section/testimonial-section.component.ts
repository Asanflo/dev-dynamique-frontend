import {Component} from '@angular/core';
import {TestiCardComponent} from '../../../../../shared/testi-card/app-testi-card';
import {ScrollReveal} from '../../../../../directives/scroll-reveal';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [TestiCardComponent, ScrollReveal, FontAwesomeModule],
  templateUrl:'testimonial-section.component.html'
})

export class TestimonialSectionComponent{
  faStar = faStar;
}

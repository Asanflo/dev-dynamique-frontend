import {Component} from '@angular/core';
import {HeroSectionComponent} from './sections/hero-section/hero-section.component';
import {ProblemSectionComponent} from './sections/problem-section/problem-section.component';
import {FeaturesSectionComponent} from './sections/features-section/features-section.component';
import {TestimonialSectionComponent} from './sections/testimonials-section/testimonial-section.component';

@Component({
  selector:'app-landing',
  standalone: true,
  imports: [HeroSectionComponent, ProblemSectionComponent, FeaturesSectionComponent, TestimonialSectionComponent],
  templateUrl: 'landing.component.html'
})

export class LandingComponent{

}

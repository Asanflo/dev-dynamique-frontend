import {Component} from '@angular/core';
import {HeroSectionComponent} from './sections/hero-section/hero-section.component';
import {ProblemSectionComponent} from './sections/problem-section/problem-section.component';
import {FeaturesSectionComponent} from './sections/features-section/features-section.component';
import {TestimonialSectionComponent} from './sections/testimonials-section/testimonial-section.component';
import {AboutSectionComponent} from './sections/about-section/about-section.component';
import {PricingSectionComponent} from './sections/pricing-section/pricing-section.component';
import {ContactSectionComponent} from './sections/contact-section/contact-section.component';

@Component({
  selector:'app-landing',
  standalone: true,
  imports: [HeroSectionComponent, ProblemSectionComponent, FeaturesSectionComponent, TestimonialSectionComponent, AboutSectionComponent, PricingSectionComponent, ContactSectionComponent],
  templateUrl: 'landing.component.html'
})

export class LandingComponent{

}

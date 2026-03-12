import {Component} from '@angular/core';
import {HeroSectionComponent} from './sections/hero-section/hero-section.component';
import {ProblemSectionComponent} from './sections/problem-section/problem-section.component';
import {FeaturesSectionComponent} from './sections/features-section/features-section.component';

@Component({
  selector:'app-landing',
  standalone: true,
  imports: [HeroSectionComponent, ProblemSectionComponent, FeaturesSectionComponent],
  templateUrl: 'landing.component.html'
})

export class LandingComponent{

}

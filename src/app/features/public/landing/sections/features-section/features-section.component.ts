import {Component} from '@angular/core';
import {CardComponent} from '../../../../../shared/card/app-card';
import {faSadCry, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features-section',
  imports: [CardComponent],
  standalone: true,
  templateUrl: 'features-section.component.html',
})

export class FeaturesSectionComponent{

  protected readonly faSadCry = faSadCry;
  protected readonly faStar = faStar;
}

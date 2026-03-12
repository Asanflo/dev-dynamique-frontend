import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: 'app-card.html'
})
export class CardComponent {
  afficheBoutton: boolean = false;
  @Input() icon!: IconDefinition;
  @Input() firstImage: string = '';
  @Input() secondImage: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tip: string = '';
  @Input() lien: string = '';

}

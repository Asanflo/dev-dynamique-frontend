import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgIf, NgFor, NgStyle} from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {ScrollReveal} from '../../directives/scroll-reveal';

export interface MicroBadge {
  icon: IconDefinition;
  label: string;
  sublabel?: string;
  position: { [key: string]: string };
  color?: 'green' | 'orange';
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, NgFor, NgStyle, ScrollReveal],
  templateUrl: 'app-card.html'
})
export class CardComponent {
  @Input() icon!: IconDefinition;
  @Input() firstImage: string = '';
  @Input() badges: MicroBadge[] = [];
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tip: string = '';
  @Input() lien: string = '';
}

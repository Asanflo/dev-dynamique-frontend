import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-testi-card',
  standalone: true,
  templateUrl: 'app-testi-card.html'
})

export class TestiCardComponent{
  @Input() entrepriseLogo: string = '';
  @Input() testimonial: string = '';
  @Input() userProfile: string = '';
  @Input() userName: string = '';
  @Input() userRole: string = '';
}

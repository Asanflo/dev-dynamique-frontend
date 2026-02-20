import { Component } from '@angular/core';
import {PromoBarComponent} from './promo-bar/promo-bar.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [PromoBarComponent],
  templateUrl: 'public-layout.component.html'
})

export class PublicLayoutComponent{

}

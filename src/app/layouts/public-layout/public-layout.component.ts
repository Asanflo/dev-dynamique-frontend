import { Component } from '@angular/core';
import {PromoBarComponent} from './promo-bar/promo-bar.component';
import {PublicHeaderComponent} from './public-header/public-header.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [PromoBarComponent, PublicHeaderComponent],
  templateUrl: 'public-layout.component.html'
})

export class PublicLayoutComponent{

}

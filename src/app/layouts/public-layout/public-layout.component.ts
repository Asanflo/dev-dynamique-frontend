import { Component } from '@angular/core';
import {PromoBarComponent} from './promo-bar/promo-bar.component';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, PromoBarComponent, PublicHeaderComponent],
  templateUrl: 'public-layout.component.html'
})

export class PublicLayoutComponent{

}

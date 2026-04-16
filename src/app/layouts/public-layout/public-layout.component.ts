import {Component, HostListener, Input} from '@angular/core';
import {PromoBarComponent} from './promo-bar/promo-bar.component';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {RouterOutlet} from '@angular/router';
import {PublicFooterComponent} from './public-footer/public-footer.component';


@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, PromoBarComponent, PublicHeaderComponent, PublicFooterComponent],
  templateUrl: 'public-layout.component.html',
  styleUrl: "public-layout-component.css"
})

export class PublicLayoutComponent{
  isSticky: boolean = false;

  promoHeight: number = 32;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY: number = window.scrollY;
    this.isSticky = scrollY > this.promoHeight;
  }

}

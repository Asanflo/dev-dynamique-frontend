import {Component} from '@angular/core';

@Component({
  selector: 'app-promo-bar',
  standalone: true,
  templateUrl: 'promo-bar.component.html',
  styleUrl: 'promo-bar.component.css'
})

export class PromoBarComponent{
  titre: string = "Découvrez nos offres jusqu'en mai avec 30% de réduction"
}

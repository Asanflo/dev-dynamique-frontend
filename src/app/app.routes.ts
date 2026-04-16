import { Routes } from '@angular/router';
import {PublicLayoutComponent} from './layouts/public-layout/public-layout.component';
import {LandingComponent} from './features/public/landing/landing.component';
import {InscriptionComponent} from './pages/inscription/inscription.component';
import {ConnexionComponent} from './pages/connexion/connexion.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
      }
    ]
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  }
];

import { faUsers, faUserPlus, faChartPie, faBell, faCalendarAlt, faCalendarCheck, faClock, faChartLine, faCheckCircle, faFire } from '@fortawesome/free-solid-svg-icons';
import {CardComponent, MicroBadge} from '../../../../../shared/card/app-card';
import {Component} from '@angular/core';
import {ScrollReveal} from '../../../../../directives/scroll-reveal';

@Component({
  selector:'app-features-section',
  standalone: true,
  imports: [CardComponent, ScrollReveal],
  templateUrl: 'features-section.component.html'
})

export class FeaturesSectionComponent {

  faUsers = faUsers;
  faCalendarAlt = faCalendarAlt;
  faChartLine = faChartLine;

  badgesCollaboration: MicroBadge[] = [
    { icon: faUserPlus,  label: 'Inviter',      sublabel: '3 membres ajoutés',   position: { top: '3rem', left: '6rem' },    color: 'green'  },
    { icon: faChartPie,  label: 'Dashboard',    sublabel: "Vue d'ensemble",      position: { top: '1rem', right: '1rem' },   color: 'orange' },
    { icon: faBell,      label: 'Notification', sublabel: '2 tâches en retard',  position: { top: '4.9rem', left: '1rem' }, color: 'orange' }
  ];

  badgesPlanification: MicroBadge[] = [
    { icon: faCalendarCheck, label: 'Sprint actif', sublabel: '12 tâches restantes', position: { top: '1rem', left: '1rem' },     color: 'green'  },
    { icon: faClock,         label: 'Échéance',     sublabel: 'Dans 3 jours',         position: { bottom: '1rem', right: '1rem' }, color: 'orange' }
  ];

  badgesSuivi: MicroBadge[] = [
    { icon: faCheckCircle, label: 'Tâche validée',  sublabel: 'Il y a 5 min',       position: { top: '1rem', left: '1rem' },   color: 'green'  },
    { icon: faFire,        label: 'Priorité haute', sublabel: '4 tâches urgentes',  position: { top: '1rem', right: '1rem' },  color: 'orange' }
  ];
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PlanAddon {
  label: string;
  price: string;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  perUser?: boolean;
  featured?: boolean;
  features: string[];
  addon?: PlanAddon;
  ctaLabel: string;
  ctaIcon?: 'apple' | 'star' | 'team';
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'pricing-section.component.html',
  styleUrl: 'pricing-section.component.css'
})
export class PricingSectionComponent {

  billingCycle: 'monthly' | 'yearly' = 'yearly';

  @Input() plans: PricingPlan[] = [
    {
      name: 'Aproj Free',
      tagline: 'Idéal pour démarrer',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        // Auth & Profil
        'Inscription et connexion sécurisée',
        'Gestion du profil utilisateur',
        'Rôles : Administrateur / Membre',

        // Projets
        'Création de projets',
        'Liste des projets avec pagination',
        'Modification et suppression de projets',

        // Tâches
        'Ajout de tâches',
        'Assignation des tâches',
        'Changement de statut',
        'Filtrage des tâches'
      ],
      ctaLabel: 'Commencer',
      ctaIcon: 'apple',
    },
    {
      name: 'Aproj Pro',
      tagline: 'Pour booster votre productivité',
      monthlyPrice: 5000,
      yearlyPrice: 4000,
      featured: true,
      features: [
        'Toutes les fonctionnalités Free',

        // UI dynamique
        'Recherche instantanée',
        'Tri des projets et tâches',
        'Notifications visuelles',
        'Drag & drop des tâches',
        'Graphiques de suivi',

        // Temps réel
        'Commentaires sur les tâches',
        'Notifications en temps réel',
        'Historique des modifications'
      ],
      addon: { label: 'Support prioritaire', price: '2000 FCFA' },
      ctaLabel: 'Essayer Pro',
      ctaIcon: 'star',
    },
    {
      name: 'Team Pro',
      tagline: 'Pour les équipes avancées',
      monthlyPrice: 9000,
      yearlyPrice: 7000,
      perUser: true,
      features: [
        'Toutes les fonctionnalités Pro',

        // Bonus
        'Upload de fichiers',
        'Export PDF des projets',
        'Calendrier des échéances',
        'Intégration API externe',
        'Tests unitaires (frontend/backend)',

        // Collaboration avancée
        'Gestion avancée des équipes',
        'Accès multi-utilisateurs'
      ],
      addon: { label: 'Support dédié', price: '5000 FCFA' },
      ctaLabel: 'Choisir ce plan',
      ctaIcon: 'team',
    },
  ];

  setBilling(cycle: 'monthly' | 'yearly'): void {
    this.billingCycle = cycle;
  }

  getPrice(plan: PricingPlan): number {
    return this.billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
  }

  getAnnualNote(plan: PricingPlan): string | null {
    if (plan.monthlyPrice === 0) return null;

    if (this.billingCycle === 'yearly') {
      const annual = plan.yearlyPrice * 12;
      return `${annual} FCFA facturé annuellement`;
    }

    return null;
  }
}

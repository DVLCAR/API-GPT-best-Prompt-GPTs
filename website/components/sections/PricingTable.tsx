'use client';

import Link from 'next/link';

const PricingTable = () => {
  const plans = [
    {
      name: 'Free',
      price: '0€',
      period: 'Toujours gratuit',
      description: 'Pour les petites équipes qui démarrent',
      features: [
        'Jusqu\'à 10 membres',
        'Issues illimitées',
        '3 projets actifs',
        'Intégrations de base',
        'Support communauté',
      ],
      cta: 'Démarrer gratuitement',
      href: '/inscription',
      highlighted: false,
    },
    {
      name: 'Basic',
      price: '8€',
      period: 'par membre/mois',
      description: 'Pour les équipes en croissance',
      features: [
        'Membres illimités',
        'Projets illimités',
        'Roadmaps',
        'Toutes les intégrations',
        'Support prioritaire',
        'Exports avancés',
        'Automatisations',
      ],
      cta: 'Commencer l\'essai',
      href: '/inscription?plan=basic',
      highlighted: true,
    },
    {
      name: 'Business',
      price: '16€',
      period: 'par membre/mois',
      description: 'Pour les équipes établies',
      features: [
        'Tout de Basic, plus :',
        'SSO / SAML',
        'Audit logs',
        'Permissions avancées',
        'SLA garanti',
        'Formation dédiée',
        'API illimitée',
      ],
      cta: 'Commencer l\'essai',
      href: '/inscription?plan=business',
      highlighted: false,
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: 'Contactez-nous',
      description: 'Pour les grandes organisations',
      features: [
        'Tout de Business, plus :',
        'Déploiement on-premise',
        'Account manager dédié',
        'Contrat personnalisé',
        'Support 24/7',
        'Conformité avancée',
        'Formations illimitées',
      ],
      cta: 'Nous contacter',
      href: '/contact?plan=enterprise',
      highlighted: false,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-white mb-4">
            Des tarifs simples et transparents
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à la taille de votre équipe.
            Tous les plans incluent 14 jours d'essai gratuit.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${
                plan.highlighted
                  ? 'card-3d border-2 border-primary-violet scale-105'
                  : 'card-3d'
              } p-8`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-white text-sm font-medium">
                  Populaire
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-4">
                <div className="text-4xl font-bold text-gradient">{plan.price}</div>
                <div className="text-sm text-gray-400">{plan.period}</div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 pb-6 border-b border-gray-800">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 text-primary-cyan flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`block text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-primary text-white hover:shadow-glass'
                    : 'glass hover:bg-gray-800/60 text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Compare Plans Link */}
        <div className="text-center">
          <Link
            href="#compare"
            className="inline-flex items-center text-primary-violet hover:text-primary-cyan transition-colors font-medium"
          >
            Comparer tous les plans en détail
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;

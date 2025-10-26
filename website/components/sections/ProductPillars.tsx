import Link from 'next/link';

const ProductPillars = () => {
  const pillars = [
    {
      title: 'Issues',
      description: 'Gérez vos tâches avec précision. Suivez, priorisez et résolvez efficacement.',
      href: '/produit/issues',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      features: ['Triage intelligent', 'Vues personnalisées', 'Raccourcis clavier'],
    },
    {
      title: 'Projects',
      description: 'Pilotez vos projets du début à la fin. Gardez le contrôle à chaque étape.',
      href: '/produit/projets',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Statuts automatiques', 'Dépendances', 'Rapports visuels'],
    },
    {
      title: 'Roadmaps',
      description: 'Planifiez votre feuille de route. Alignez l\'équipe sur la vision produit.',
      href: '/produit/roadmaps',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      features: ['Timeline visuelle', 'Jalons', 'Partage public'],
    },
  ];

  return (
    <section className="section-padding bg-gray-900/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-white mb-4">
            Trois piliers pour tout gérer
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Une suite intégrée qui s'adapte à votre workflow, pas l'inverse
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="card-3d p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-6">{pillar.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-primary-cyan" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center text-primary-violet group-hover:text-primary-cyan transition-colors font-medium">
                Voir en action
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPillars;

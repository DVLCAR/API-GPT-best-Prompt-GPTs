import type { Metadata } from 'next';
import FeatureRow from '@/components/sections/FeatureRow';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Roadmaps - Feuille de route visuelle | BuildFlow',
  description: 'Planifiez votre feuille de route produit. Alignez l\'équipe sur la vision à long terme.',
};

export default function RoadmapsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pt-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom text-center">
          <div className="inline-block px-4 py-2 rounded-full glass mb-6">
            <span className="text-primary-cyan text-sm font-medium">Roadmaps</span>
          </div>
          <h1 className="text-hero font-bold text-white mb-6">
            Planifiez votre
            <br />
            feuille de route
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Alignez votre équipe sur la vision produit. Communiquez clairement les priorités
            et suivez l'avancement trimestre après trimestre.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/inscription" className="btn-primary">
              Créer ma roadmap
            </a>
            <a href="#demo" className="btn-secondary">
              Voir un exemple
            </a>
          </div>
        </div>
      </section>

      {/* Timeline visuelle */}
      <FeatureRow
        title="Timeline visuelle et intuitive"
        description="Une vue chronologique claire de votre roadmap, de l'idée au déploiement."
        features={[
          'Vue trimestrielle, mensuelle ou annuelle',
          'Glisser-déposer pour réorganiser les initiatives',
          'Jalons (milestones) visuels avec dates clés',
          'Zoom in/out fluide pour voir le détail ou la vue d\'ensemble',
        ]}
        imagePosition="left"
        ctaLink="#"
        ctaText="Explorer la timeline"
      />

      {/* Collaboration stakeholders */}
      <FeatureRow
        title="Partage public et privé"
        description="Partagez votre roadmap avec les parties prenantes, clients ou investisseurs."
        features={[
          'Liens publics sécurisés sans connexion requise',
          'Mode présentation (plein écran sans distractions)',
          'Commentaires et feedbacks intégrés',
          'Export PDF/PNG pour les présentations',
        ]}
        imagePosition="right"
        ctaLink="#"
        ctaText="Partager une roadmap"
      />

      {/* Priorités */}
      <FeatureRow
        title="Priorisation basée sur l\'impact"
        description="Classez vos initiatives selon l'impact business, l'effort et la valeur stratégique."
        features={[
          'Matrice Impact/Effort (RICE, ICE, ou custom)',
          'Scoring automatique selon vos critères',
          'Visualisation des trade-offs et arbitrages',
          'Recommandations IA pour optimiser le planning',
        ]}
        imagePosition="left"
        ctaLink="#"
        ctaText="Prioriser efficacement"
      />

      {/* Use Cases */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-white mb-4">
              Pour tous vos scénarios
            </h2>
            <p className="text-lg text-gray-300">
              Des roadmaps adaptées à chaque besoin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Product Roadmap',
                icon: '🚀',
                desc: 'Vision produit trimestrielle avec features et releases',
              },
              {
                title: 'Tech Roadmap',
                icon: '⚙️',
                desc: 'Dette technique, migrations, améliorations infra',
              },
              {
                title: 'Go-to-Market',
                icon: '📊',
                desc: 'Campagnes marketing, lancements, expansion géo',
              },
            ].map((useCase, idx) => (
              <div key={useCase.title} className="card-3d p-8 text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </div>
  );
}

import type { Metadata } from 'next';
import FeatureRow from '@/components/sections/FeatureRow';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Projets - Pilotage de bout en bout | BuildFlow',
  description: 'Gérez vos projets du début à la fin. Gardez le contrôle à chaque étape avec des vues adaptées.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pt-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom text-center">
          <div className="inline-block px-4 py-2 rounded-full glass mb-6">
            <span className="text-primary-violet text-sm font-medium">Projects</span>
          </div>
          <h1 className="text-hero font-bold text-white mb-6">
            Pilotez vos projets
            <br />
            de bout en bout
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Du concept au lancement, gardez le contrôle complet. Visualisez la progression,
            gérez les dépendances et prenez les bonnes décisions au bon moment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/inscription" className="btn-primary">
              Démarrer gratuitement
            </a>
            <a href="#demo" className="btn-secondary">
              Voir la démo
            </a>
          </div>
        </div>
      </section>

      {/* Vues adaptées */}
      <FeatureRow
        title="Vues adaptées à chaque rôle"
        description="Board Kanban pour l'équipe, timeline pour les chefs de projet, rapport pour les stakeholders."
        features={[
          'Vue Board : Kanban fluide pour le travail quotidien',
          'Vue Liste : Table triable avec filtres avancés',
          'Vue Timeline : Gantt moderne pour le planning',
          'Vue Rapport : Insights et analytics en temps réel',
        ]}
        imagePosition="left"
        ctaLink="#"
        ctaText="Explorer les vues"
      />

      {/* Gestion des dépendances */}
      <FeatureRow
        title="Dépendances et blocages"
        description="Visualisez et gérez les interdépendances entre tâches pour éviter les goulots d'étranglement."
        features={[
          'Graphe de dépendances interactif',
          'Alertes automatiques sur les blocages',
          'Chemin critique mis en évidence',
          'Suggestions de réorganisation intelligente',
        ]}
        imagePosition="right"
        ctaLink="#"
        ctaText="Gérer les dépendances"
      />

      {/* Statuts automatiques */}
      <FeatureRow
        title="Statuts automatiques"
        description="Les projets se mettent à jour automatiquement selon la progression des tâches."
        features={[
          'Calcul automatique de la progression (% complété)',
          'Statut projet basé sur les issues enfants',
          'Détection automatique de retard ou avance',
          'Notifications proactives aux stakeholders',
        ]}
        imagePosition="left"
        ctaLink="#"
        ctaText="Découvrir l'automatisation"
      />

      {/* Timeline Flow */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-white mb-4">
              Du concept au lancement
            </h2>
            <p className="text-lg text-gray-300">
              Un workflow clair en 4 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Planification', desc: 'Définissez objectifs et scope' },
              { step: '2', title: 'Exécution', desc: 'Réalisez les tâches en équipe' },
              { step: '3', title: 'Review', desc: 'Validez et ajustez' },
              { step: '4', title: 'Lancement', desc: 'Déployez et mesurez' },
            ].map((item, idx) => (
              <div key={item.step} className="relative" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="card-3d p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-primary" />
                )}
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

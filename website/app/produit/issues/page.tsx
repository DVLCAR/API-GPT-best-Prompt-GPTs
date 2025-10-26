import type { Metadata } from 'next';
import FeatureRow from '@/components/sections/FeatureRow';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Issues - Gestion de tâches moderne | BuildFlow',
  description: 'Suivez, priorisez et résolvez vos tâches avec précision. Workflow optimisé pour les équipes performantes.',
};

export default function IssuesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding pt-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom text-center">
          <div className="inline-block px-4 py-2 rounded-full glass mb-6">
            <span className="text-primary-cyan text-sm font-medium">Issues</span>
          </div>
          <h1 className="text-hero font-bold text-white mb-6">
            Gérez vos tâches
            <br />
            avec précision
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Un système de gestion d'issues conçu pour la rapidité. Suivez, priorisez et résolvez
            efficacement avec des workflows intelligents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/inscription" className="btn-primary">
              Essayer gratuitement
            </a>
            <a href="#demo" className="btn-secondary">
              Voir la démo
            </a>
          </div>
        </div>
      </section>

      {/* Triage intelligent */}
      <FeatureRow
        title="Triage intelligent et rapide"
        description="Organisez vos issues en quelques secondes avec des vues personnalisables et des filtres puissants."
        features={[
          'Vues personnalisées par équipe, projet ou priorité',
          'Filtres avancés et recherche instantanée',
          'Raccourcis clavier pour naviguer à la vitesse de la pensée',
          'Tri automatique par priorité, impact ou effort',
        ]}
        imagePosition="left"
        ctaLink="#"
        ctaText="Découvrir le triage"
      />

      {/* Workflow optimisé */}
      <FeatureRow
        title="Workflow optimisé"
        description="Des pipelines automatisés qui s'adaptent à votre méthode de travail."
        features={[
          'Statuts personnalisables (Backlog, In Progress, Review, Done)',
          'Transitions automatiques basées sur des événements',
          'Assignation intelligente selon les compétences',
          'Notifications contextuelles et non intrusives',
        ]}
        imagePosition="right"
        ctaLink="#"
        ctaText="Explorer les workflows"
      />

      {/* Collaboration */}
      <FeatureRow
        title="Collaboration transparente"
        description="Communiquez directement dans le contexte de chaque issue."
        features={[
          'Commentaires threaded avec mentions',
          'Historique complet des modifications',
          'Pièces jointes et captures d\'écran intégrées',
          'Intégrations Slack, Teams et email',
        ]}
        imagePosition="left"
        ctaLink="#"
        ctaText="En savoir plus"
      />

      {/* Métriques */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-white mb-4">
              Mesurez ce qui compte
            </h2>
            <p className="text-lg text-gray-300">
              Visualisez vos performances en temps réel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-gradient mb-2">3.5x</div>
              <div className="text-gray-400">Plus rapide</div>
              <div className="text-sm text-gray-500 mt-2">que les outils traditionnels</div>
            </div>
            <div className="glass p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-gradient mb-2">-60%</div>
              <div className="text-gray-400">Temps de résolution</div>
              <div className="text-sm text-gray-500 mt-2">avec l'automatisation</div>
            </div>
            <div className="glass p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-400">Visibilité</div>
              <div className="text-sm text-gray-500 mt-2">sur toutes vos issues</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </div>
  );
}

'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const integrations = [
  { name: 'GitHub', category: 'Dev Tools', description: 'Synchronisez vos repos et pull requests', popular: true },
  { name: 'GitLab', category: 'Dev Tools', description: 'Intégration complète avec GitLab', popular: false },
  { name: 'Slack', category: 'Communication', description: 'Notifications et commandes Slack', popular: true },
  { name: 'Discord', category: 'Communication', description: 'Notifications dans vos serveurs Discord', popular: false },
  { name: 'Figma', category: 'Design', description: 'Liez vos designs aux issues', popular: true },
  { name: 'Notion', category: 'Documentation', description: 'Synchronisation bidirectionnelle', popular: true },
  { name: 'Jira', category: 'Migration', description: 'Importez vos projets Jira', popular: true },
  { name: 'Trello', category: 'Migration', description: 'Migration facile depuis Trello', popular: false },
  { name: 'Zendesk', category: 'Support', description: 'Créez des issues depuis les tickets', popular: false },
  { name: 'Intercom', category: 'Support', description: 'Support client intégré', popular: false },
  { name: 'Zapier', category: 'Automation', description: 'Automatisez avec 3000+ apps', popular: true },
  { name: 'Make', category: 'Automation', description: 'Scénarios d\'automatisation avancés', popular: false },
  { name: 'Linear', category: 'Migration', description: 'Importez depuis Linear', popular: false },
  { name: 'Asana', category: 'Migration', description: 'Migration depuis Asana', popular: false },
  { name: 'Monday', category: 'Migration', description: 'Importez vos boards Monday', popular: false },
  { name: 'Google Drive', category: 'Storage', description: 'Attachez des fichiers Google Drive', popular: false },
];

const categories = ['Toutes', 'Dev Tools', 'Communication', 'Design', 'Documentation', 'Migration', 'Support', 'Automation', 'Storage'];

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = selectedCategory === 'Toutes' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding pt-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom text-center">
          <h1 className="text-hero font-bold text-white mb-6">
            Intégrations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Connectez BuildFlow à vos outils préférés. Plus de 50 intégrations disponibles
            pour automatiser votre workflow.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une intégration..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-violet"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-white'
                    : 'glass text-gray-300 hover:bg-gray-800/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-400">
              {filteredIntegrations.length} intégration{filteredIntegrations.length > 1 ? 's' : ''} trouvée{filteredIntegrations.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration, idx) => (
              <div
                key={integration.name}
                className="card-3d p-6 hover:scale-105 transition-transform cursor-pointer"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-lg mr-3">
                      {integration.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                      <span className="text-xs text-gray-500">{integration.category}</span>
                    </div>
                  </div>
                  {integration.popular && (
                    <span className="px-2 py-1 rounded-full bg-primary-violet/20 text-primary-violet text-xs font-medium">
                      Populaire
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{integration.description}</p>

                {/* CTA */}
                <button className="w-full py-2 rounded-lg glass hover:bg-gray-800/60 transition-colors text-white text-sm font-medium">
                  Configurer
                </button>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-4">Aucune intégration trouvée</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Toutes');
                }}
                className="btn-secondary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vous ne trouvez pas votre outil ?
          </h2>
          <p className="text-gray-300 mb-8">
            Utilisez notre API ou Webhooks pour créer votre intégration personnalisée.
            Notre équipe peut aussi vous aider à développer une intégration sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/docs" className="btn-primary">
              Voir la documentation API
            </a>
            <a href="/contact" className="btn-secondary">
              Demander une intégration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

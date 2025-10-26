import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation - BuildFlow',
  description: 'Guides, tutoriels et documentation API pour BuildFlow.',
};

export default function DocsPage() {
  const docSections = [
    {
      title: 'Démarrage rapide',
      icon: '🚀',
      links: [
        { title: 'Introduction', href: '#' },
        { title: 'Créer votre premier projet', href: '#' },
        { title: 'Inviter votre équipe', href: '#' },
        { title: 'Configurer les intégrations', href: '#' },
      ],
    },
    {
      title: 'Fonctionnalités',
      icon: '⚙️',
      links: [
        { title: 'Gestion des Issues', href: '#' },
        { title: 'Projets et workflows', href: '#' },
        { title: 'Roadmaps', href: '#' },
        { title: 'Automatisations', href: '#' },
      ],
    },
    {
      title: 'API & Développeurs',
      icon: '💻',
      links: [
        { title: 'API Reference', href: '#' },
        { title: 'Webhooks', href: '#' },
        { title: 'Authentification', href: '#' },
        { title: 'Rate Limits', href: '#' },
      ],
    },
    {
      title: 'Sécurité & Conformité',
      icon: '🔒',
      links: [
        { title: 'Sécurité', href: '#' },
        { title: 'Confidentialité (RGPD)', href: '#' },
        { title: 'SOC 2', href: '#' },
        { title: 'SSO / SAML', href: '#' },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding pt-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom text-center">
          <h1 className="text-display font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Tout ce dont vous avez besoin pour tirer le meilleur parti de BuildFlow
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
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

      {/* Doc Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, idx) => (
              <div key={section.title} className="card-3d p-8" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{section.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="flex items-center text-gray-300 hover:text-primary-cyan transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-gray-300 mb-8">
            Notre équipe support est là pour vous aider
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contacter le support
          </a>
        </div>
      </section>
    </div>
  );
}

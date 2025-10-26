const LogoWall = () => {
  const integrations = [
    { name: 'GitHub', alt: 'GitHub' },
    { name: 'Slack', alt: 'Slack' },
    { name: 'Jira', alt: 'Jira' },
    { name: 'Zendesk', alt: 'Zendesk' },
    { name: 'Figma', alt: 'Figma' },
    { name: 'Notion', alt: 'Notion' },
    { name: 'GitLab', alt: 'GitLab' },
    { name: 'Discord', alt: 'Discord' },
    { name: 'Zapier', alt: 'Zapier' },
    { name: 'Trello', alt: 'Trello' },
    { name: 'Asana', alt: 'Asana' },
    { name: 'Monday', alt: 'Monday' },
  ];

  return (
    <section className="section-padding border-y border-gray-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Intégrations</p>
          <h2 className="text-3xl font-bold text-white mb-4">
            S'intègre avec vos outils préférés
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connectez BuildFlow à votre stack technique en quelques clics
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="flex items-center justify-center p-4 glass rounded-lg hover:bg-gray-800/60 transition-all cursor-pointer group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                  {integration.name.charAt(0)}
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  {integration.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/integrations"
            className="inline-flex items-center text-primary-violet hover:text-primary-cyan transition-colors font-medium"
          >
            Voir toutes les intégrations
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoWall;

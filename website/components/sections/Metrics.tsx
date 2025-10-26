const Metrics = () => {
  const stats = [
    { value: '10,000+', label: 'Équipes actives' },
    { value: '50+', label: 'Pays' },
    { value: '<100ms', label: 'Latence moyenne' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <section className="section-padding bg-gray-900/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-white mb-4">
            La confiance de milliers d'équipes
          </h2>
          <p className="text-lg text-gray-300">
            Des startups aux entreprises, partout dans le monde
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-8 rounded-xl hover:bg-gray-800/60 transition-all">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

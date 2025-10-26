import Link from 'next/link';

const Hero = () => {
  return (
    <section className="section-padding pt-32 pb-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-violet/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom text-center">
        {/* Main Heading */}
        <h1 className="text-hero font-bold text-white mb-6 animate-fade-in">
          Le système pour planifier
          <br />
          et construire vos produits
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in animation-delay-200">
          Centralisez vos issues, projets et roadmaps. De l'idée au lancement — rapidement.
          Une plateforme moderne pour équipes performantes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-400">
          <Link href="/inscription" className="btn-primary">
            Démarrer gratuitement
          </Link>
          <Link href="/contact" className="btn-secondary">
            Parler à un expert
          </Link>
        </div>

        {/* UI Mock / Screenshot Area */}
        <div className="relative max-w-6xl mx-auto animate-slide-up animation-delay-400">
          <div className="card-3d p-4">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="inline-block px-6 py-3 rounded-lg glass mb-4">
                  <p className="text-gray-300 text-sm">Interface UI - Démo interactive</p>
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="glass p-4 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg mb-2 mx-auto" />
                    <div className="h-2 bg-gray-700 rounded w-3/4 mx-auto" />
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg mb-2 mx-auto" />
                    <div className="h-2 bg-gray-700 rounded w-3/4 mx-auto" />
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg mb-2 mx-auto" />
                    <div className="h-2 bg-gray-700 rounded w-3/4 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 glass px-4 py-2 rounded-lg text-sm text-gray-300 hidden lg:block">
            ⚡ Vitesse
          </div>
          <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg text-sm text-gray-300 hidden lg:block">
            ✨ Clarté
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-lg text-sm text-gray-300 hidden lg:block">
            🎯 Gouvernance légère
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

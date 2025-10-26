import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-violet/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center glass-strong p-12 rounded-2xl">
          {/* Heading */}
          <h2 className="text-display font-bold text-white mb-6">
            Prêt à transformer votre workflow ?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-10">
            Rejoignez des milliers d'équipes qui construisent mieux avec BuildFlow.
            Démarrez gratuitement, sans carte de crédit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/inscription" className="btn-primary text-lg px-8 py-4">
              Démarrer gratuitement
            </Link>
            <Link href="/contact" className="btn-ghost text-lg px-8 py-4">
              Parler à un expert
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-10 border-t border-gray-700/50">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Gratuit pour toujours
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sans carte bancaire
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Configuration en 2 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

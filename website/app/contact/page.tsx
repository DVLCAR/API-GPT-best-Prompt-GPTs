import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - BuildFlow',
  description: 'Contactez notre équipe. Nous sommes là pour vous aider.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="section-padding pt-24">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-display font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-300">
              Notre équipe est là pour répondre à vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-3d p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-violet"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-violet"
                    placeholder="jean@entreprise.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Entreprise</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-violet"
                    placeholder="Mon Entreprise"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-violet"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">Support</h3>
                <p className="text-gray-400 mb-4">
                  Besoin d'aide ? Notre équipe support est disponible 24/7.
                </p>
                <a href="mailto:support@buildflow.com" className="text-primary-cyan hover:text-primary-violet transition-colors">
                  support@buildflow.com
                </a>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">Ventes</h3>
                <p className="text-gray-400 mb-4">
                  Discutez avec notre équipe commerciale pour les plans Enterprise.
                </p>
                <a href="mailto:sales@buildflow.com" className="text-primary-cyan hover:text-primary-violet transition-colors">
                  sales@buildflow.com
                </a>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">Général</h3>
                <p className="text-gray-400 mb-4">
                  Pour toute autre question.
                </p>
                <a href="mailto:hello@buildflow.com" className="text-primary-cyan hover:text-primary-violet transition-colors">
                  hello@buildflow.com
                </a>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">Réseaux sociaux</h3>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <span className="font-bold">T</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <span className="font-bold">L</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <span className="font-bold">G</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

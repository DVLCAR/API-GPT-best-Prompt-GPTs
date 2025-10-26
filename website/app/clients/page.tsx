import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clients - BuildFlow',
  description: 'Découvrez comment les équipes innovantes utilisent BuildFlow pour construire de meilleurs produits.',
};

export default function ClientsPage() {
  const testimonials = [
    {
      company: 'TechStart',
      author: 'Marie Dubois',
      role: 'Head of Product',
      quote: 'BuildFlow a transformé notre façon de travailler. Nous sommes 3x plus rapides.',
      logo: 'T',
    },
    {
      company: 'InnovateCo',
      author: 'Jean Martin',
      role: 'CTO',
      quote: 'La meilleure solution de gestion de projet que nous ayons testée. Intuitive et puissante.',
      logo: 'I',
    },
    {
      company: 'DesignHub',
      author: 'Sophie Laurent',
      role: 'Product Manager',
      quote: 'Enfin un outil qui unit design, produit et engineering au même endroit.',
      logo: 'D',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding pt-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container-custom text-center">
          <h1 className="text-hero font-bold text-white mb-6">
            Ils construisent avec BuildFlow
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des startups aux scale-ups, découvrez comment les meilleures équipes utilisent BuildFlow
            pour accélérer leur développement produit.
          </p>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="section-padding">
        <div className="container-custom">
          <p className="text-center text-gray-400 mb-12">Utilisé par plus de 10,000 équipes dans le monde</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((letter, idx) => (
              <div key={letter} className="flex items-center justify-center p-6 glass rounded-lg" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-2xl">
                  {letter}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom">
          <h2 className="text-display font-bold text-white text-center mb-16">
            Ce qu'ils en disent
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={testimonial.company} className="card-3d p-8" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Logo */}
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl mb-6">
                  {testimonial.logo}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez-les dès aujourd'hui
          </h2>
          <p className="text-gray-300 mb-8">
            Démarrez gratuitement, sans carte bancaire. Mise en place en 2 minutes.
          </p>
          <a href="/inscription" className="btn-primary inline-block">
            Créer mon compte gratuit
          </a>
        </div>
      </section>
    </div>
  );
}

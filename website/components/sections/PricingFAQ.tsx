'use client';

import { useState } from 'react';

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Puis-je changer de plan à tout moment ?',
      answer:
        'Oui, absolument. Vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement et nous ajusterons votre facturation en conséquence.',
    },
    {
      question: 'Comment fonctionne l\'essai gratuit ?',
      answer:
        'Tous les plans payants incluent 14 jours d\'essai gratuit. Aucune carte bancaire n\'est requise. Vous pouvez annuler à tout moment pendant l\'essai sans frais.',
    },
    {
      question: 'Que se passe-t-il si j\'ajoute des membres en cours de mois ?',
      answer:
        'Nous facturons au prorata. Si vous ajoutez un membre à mi-chemin du cycle de facturation, vous ne payez que pour la moitié du mois. Simple et transparent.',
    },
    {
      question: 'Offrez-vous des réductions pour les organisations à but non lucratif ?',
      answer:
        'Oui ! Nous offrons 50% de réduction pour les organisations à but non lucratif et les établissements d\'enseignement. Contactez-nous pour plus d\'informations.',
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer:
        'Absolument. Nous utilisons un chiffrement de niveau bancaire, des sauvegardes quotidiennes, et sommes conformes SOC 2 Type II et GDPR. Vos données sont stockées dans des centres de données certifiés.',
    },
    {
      question: 'Puis-je exporter mes données ?',
      answer:
        'Oui, vous pouvez exporter toutes vos données à tout moment en JSON, CSV ou Excel. Vos données vous appartiennent, toujours.',
    },
  ];

  return (
    <section className="section-padding bg-gray-900/30">
      <div className="container-custom max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold text-white mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-300">
            Tout ce que vous devez savoir sur nos tarifs
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/40 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-violet flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 border-t border-gray-800/50">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center glass-strong p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-2">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-400 mb-6">
            Notre équipe est là pour vous aider
          </p>
          <a
            href="/contact"
            className="inline-flex items-center btn-primary"
          >
            Contactez-nous
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;

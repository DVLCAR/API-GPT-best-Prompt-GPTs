import Link from 'next/link';

type FeatureRowProps = {
  title: string;
  description: string;
  features: string[];
  imagePosition?: 'left' | 'right';
  ctaText?: string;
  ctaLink?: string;
};

const FeatureRow = ({
  title,
  description,
  features,
  imagePosition = 'left',
  ctaText = 'En savoir plus',
  ctaLink = '#',
}: FeatureRowProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image/Demo Area */}
          <div className={`${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
            <div className="card-3d p-6">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
                <div className="text-center p-8">
                  <div className="inline-block px-6 py-3 rounded-lg glass mb-4">
                    <p className="text-gray-300 text-sm">Démo interactive</p>
                  </div>
                  <div className="max-w-md mx-auto space-y-2">
                    <div className="glass p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg mr-3" />
                      <div className="flex-1">
                        <div className="h-2 bg-gray-700 rounded w-3/4 mb-1" />
                        <div className="h-2 bg-gray-700 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="glass p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg mr-3" />
                      <div className="flex-1">
                        <div className="h-2 bg-gray-700 rounded w-3/4 mb-1" />
                        <div className="h-2 bg-gray-700 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
            <h2 className="text-display font-bold text-white mb-6">{title}</h2>
            <p className="text-xl text-gray-300 mb-8">{description}</p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-primary-cyan flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {ctaLink && (
              <Link
                href={ctaLink}
                className="inline-flex items-center text-primary-violet hover:text-primary-cyan transition-colors font-medium text-lg"
              >
                {ctaText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureRow;

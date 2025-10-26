import type { Metadata } from 'next';
import PricingTable from '@/components/sections/PricingTable';
import PricingFAQ from '@/components/sections/PricingFAQ';

export const metadata: Metadata = {
  title: 'Tarifs - BuildFlow',
  description: 'Des tarifs simples et transparents pour toutes les tailles d\'équipe. Essai gratuit de 14 jours.',
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingTable />
      <PricingFAQ />
    </div>
  );
}

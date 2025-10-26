import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'BuildFlow - Le système pour planifier et construire vos produits',
  description: 'Centralisez vos issues, projets et roadmaps. De l\'idée au lancement — rapidement.',
  keywords: ['gestion de projet', 'roadmap', 'issues', 'collaboration'],
  authors: [{ name: 'BuildFlow' }],
  openGraph: {
    title: 'BuildFlow - Le système pour planifier et construire vos produits',
    description: 'Centralisez vos issues, projets et roadmaps. De l\'idée au lancement — rapidement.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildFlow - Le système pour planifier et construire vos produits',
    description: 'Centralisez vos issues, projets et roadmaps. De l\'idée au lancement — rapidement.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

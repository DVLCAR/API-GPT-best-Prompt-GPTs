'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800/50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-white">BuildFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Produit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProductOpen && (
                <div
                  onMouseEnter={() => setIsProductOpen(true)}
                  onMouseLeave={() => setIsProductOpen(false)}
                  className="absolute left-0 top-full mt-2 w-64 glass-strong rounded-xl shadow-glass p-2"
                >
                  <Link href="/produit/issues" className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="font-medium text-white">Issues</div>
                    <div className="text-sm text-gray-400 mt-1">Gérez vos tâches efficacement</div>
                  </Link>
                  <Link href="/produit/projets" className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="font-medium text-white">Projets</div>
                    <div className="text-sm text-gray-400 mt-1">Pilotez vos projets</div>
                  </Link>
                  <Link href="/produit/roadmaps" className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="font-medium text-white">Roadmaps</div>
                    <div className="text-sm text-gray-400 mt-1">Planifiez votre feuille de route</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Ressources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  className="absolute left-0 top-full mt-2 w-64 glass-strong rounded-xl shadow-glass p-2"
                >
                  <Link href="/changelog" className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="font-medium text-white">Changelog</div>
                    <div className="text-sm text-gray-400 mt-1">Dernières mises à jour</div>
                  </Link>
                  <Link href="/actualites" className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="font-medium text-white">Actualités</div>
                    <div className="text-sm text-gray-400 mt-1">Nouveautés produit</div>
                  </Link>
                  <Link href="/ressources" className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <div className="font-medium text-white">Blog</div>
                    <div className="text-sm text-gray-400 mt-1">Articles et guides</div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/tarifs" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Tarifs
            </Link>
            <Link href="/clients" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Clients
            </Link>
            <Link href="/integrations" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Intégrations
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/docs" className="px-4 py-2 text-sm text-primary-violet hover:text-primary-cyan transition-colors font-medium">
              Docs
            </Link>
            <Link href="/connexion" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              Connexion
            </Link>
            <Link href="/inscription" className="btn-primary text-sm">
              Inscription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800/50">
            <div className="space-y-1">
              <Link href="/produit" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg">
                Produit
              </Link>
              <Link href="/tarifs" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg">
                Tarifs
              </Link>
              <Link href="/clients" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg">
                Clients
              </Link>
              <Link href="/docs" className="block px-4 py-2 text-primary-violet hover:text-primary-cyan font-medium">
                Docs
              </Link>
              <Link href="/connexion" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg">
                Connexion
              </Link>
              <Link href="/inscription" className="block px-4 py-2 bg-gradient-primary text-white rounded-lg text-center font-medium">
                Inscription
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

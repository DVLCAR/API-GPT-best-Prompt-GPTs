import type { Metadata } from 'next';
import Link from 'next/link';
import { getPostsFromDirectory } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Actualités - BuildFlow',
  description: 'Découvrez les dernières annonces et nouveautés produit de BuildFlow.',
};

export default function NowPage() {
  const posts = getPostsFromDirectory('now');

  return (
    <div className="pt-16 section-padding">
      <div className="container-custom max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-display font-bold text-white mb-4">Actualités</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Les dernières annonces et grandes nouveautés de BuildFlow.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/actualites/${post.slug}`}
              className="card-3d overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-violet/20 to-primary-cyan/20 border-b border-gray-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Image à venir</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Date & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-sm text-gray-400">
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.category && (
                    <span className="px-3 py-1 rounded-full bg-primary-cyan/20 text-primary-cyan text-xs font-medium">
                      {post.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>

                {/* Read More */}
                <div className="flex items-center text-primary-violet group-hover:text-primary-cyan transition-colors mt-6 font-medium">
                  Lire l'annonce
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="col-span-2 text-center py-16 text-gray-400">
              Aucune actualité pour le moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

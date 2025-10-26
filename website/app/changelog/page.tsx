import type { Metadata } from 'next';
import Link from 'next/link';
import { getPostsFromDirectory } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Changelog - BuildFlow',
  description: 'Suivez toutes les mises à jour, nouvelles fonctionnalités et corrections de BuildFlow.',
};

export default function ChangelogPage() {
  const posts = getPostsFromDirectory('changelog');

  return (
    <div className="pt-16 section-padding">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-display font-bold text-white mb-4">Changelog</h1>
          <p className="text-xl text-gray-300">
            Toutes les mises à jour, nouvelles fonctionnalités et améliorations de BuildFlow.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="glass p-8 rounded-xl hover:bg-gray-800/60 transition-all">
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
                  <span className="px-3 py-1 rounded-full bg-primary-violet/20 text-primary-violet text-xs font-medium">
                    {post.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <Link href={`/changelog/${post.slug}`}>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-gradient transition-colors">
                  {post.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="text-gray-300 mb-4">{post.excerpt}</p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Read More */}
              <Link
                href={`/changelog/${post.slug}`}
                className="inline-flex items-center text-primary-cyan hover:text-primary-violet transition-colors mt-4 font-medium"
              >
                Lire la suite
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              Aucune mise à jour pour le moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

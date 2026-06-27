import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export const revalidate = 0

export default async function StoriesPage() {
  const supabase = await createClient()
  const { data: stories } = await supabase
    .from('stories')
    .select('id, title, content, author_name, created_at')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold" style={{ color: 'var(--primary)' }}>
            Community Stories
          </h1>
          <p className="mt-2" style={{ color: '#666' }}>
            Real experiences from real people. You are not alone.
          </p>
        </div>
        <Link
          href="/stories/new"
          className="px-6 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90 text-sm"
          style={{ background: 'var(--primary)' }}
        >
          + Share Your Story
        </Link>
      </div>

      {!stories || stories.length === 0 ? (
        <div
          className="text-center py-20 rounded-2xl"
          style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
        >
          <p className="text-lg mb-2" style={{ color: '#888' }}>No stories yet.</p>
          <p style={{ color: '#aaa' }}>Be the first to share yours.</p>
          <Link
            href="/stories/new"
            className="mt-6 inline-block px-6 py-3 rounded-full text-white text-sm font-semibold"
            style={{ background: 'var(--primary)' }}
          >
            Share Your Story
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {stories.map((story) => (
            <Link key={story.id} href={`/stories/${story.id}`} className="block group">
              <article
                className="rounded-2xl p-7 transition-shadow hover:shadow-md"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <h2
                  className="text-xl font-bold mb-2 group-hover:underline"
                  style={{ color: 'var(--primary)' }}
                >
                  {story.title}
                </h2>
                <p className="line-clamp-3 leading-relaxed mb-4" style={{ color: '#555' }}>
                  {story.content}
                </p>
                <div className="flex items-center gap-3 text-sm" style={{ color: '#999' }}>
                  <span>{story.author_name}</span>
                  <span>·</span>
                  <span>{new Date(story.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

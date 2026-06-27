import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CommentSection from '@/components/CommentSection'

export const revalidate = 0

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: story } = await supabase
    .from('stories')
    .select('*')
    .eq('id', id)
    .single()

  if (!story) notFound()

  const { data: comments } = await supabase
    .from('comments')
    .select('*')
    .eq('story_id', id)
    .order('created_at', { ascending: true })

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/stories" className="text-sm hover:underline mb-8 inline-block" style={{ color: 'var(--primary)' }}>
        ← Back to Stories
      </Link>

      <article
        className="rounded-2xl p-8 md:p-10 mb-10"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
          {story.title}
        </h1>
        <div className="flex items-center gap-3 text-sm mb-8" style={{ color: '#999' }}>
          <span>{story.author_name}</span>
          <span>·</span>
          <span>{new Date(story.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="leading-relaxed whitespace-pre-wrap text-lg" style={{ color: '#444' }}>
          {story.content}
        </div>
      </article>

      <CommentSection storyId={id} initialComments={comments ?? []} />
    </div>
  )
}

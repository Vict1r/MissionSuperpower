'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface Comment {
  id: string
  content: string
  author_name: string
  created_at: string
}

export default function CommentSection({
  storyId,
  initialComments,
}: {
  storyId: string
  initialComments: Comment[]
}) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [authorName, setAuthorName] = useState('')
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!content.trim()) return
    setSubmitting(true)
    setError('')

    const supabase = createClient()
    const { data, error: err } = await supabase
      .from('comments')
      .insert({
        story_id: storyId,
        content: content.trim(),
        author_name: authorName.trim() || 'Anonymous',
      })
      .select()
      .single()

    if (err) {
      setError('Something went wrong. Please try again.')
    } else if (data) {
      setComments((prev) => [...prev, data])
      setContent('')
      setAuthorName('')
    }
    setSubmitting(false)
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
        Responses ({comments.length})
      </h2>

      {comments.length === 0 && (
        <p className="mb-8" style={{ color: '#999' }}>
          No responses yet. Be the first to respond.
        </p>
      )}

      <div className="space-y-5 mb-10">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="rounded-xl p-6"
            style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
          >
            <p className="leading-relaxed mb-3 whitespace-pre-wrap" style={{ color: '#444' }}>
              {comment.content}
            </p>
            <div className="flex gap-3 text-sm" style={{ color: '#999' }}>
              <span>{comment.author_name}</span>
              <span>·</span>
              <span>{new Date(comment.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-7"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--primary)' }}>
          Leave a Response
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#555' }}>
              Your Name (optional)
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Anonymous"
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--background)',
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#555' }}>
              Your Response <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={4}
              placeholder="Share your thoughts, support, or your own experience..."
              className="w-full rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 resize-none"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--background)',
              }}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={submitting || !content.trim()}
            className="px-6 py-2.5 rounded-full text-white text-sm font-semibold disabled:opacity-50 transition-opacity hover:opacity-90"
            style={{ background: 'var(--primary)' }}
          >
            {submitting ? 'Posting...' : 'Post Response'}
          </button>
        </form>
      </div>
    </section>
  )
}

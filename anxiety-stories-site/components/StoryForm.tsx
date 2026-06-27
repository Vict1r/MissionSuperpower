'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function StoryForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return
    setSubmitting(true)
    setError('')

    const supabase = createClient()
    const { data, error: err } = await supabase
      .from('stories')
      .insert({
        title: title.trim(),
        content: content.trim(),
        author_name: authorName.trim() || 'Anonymous',
      })
      .select('id')
      .single()

    if (err) {
      setError('Something went wrong. Please try again.')
      setSubmitting(false)
    } else if (data) {
      router.push(`/stories/${data.id}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 space-y-6"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
    >
      <div>
        <label className="block text-sm font-semibold mb-1" style={{ color: '#555' }}>
          Your Name (optional)
        </label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Anonymous"
          className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
          style={{ border: '1px solid var(--border)', background: 'var(--background)' }}
        />
        <p className="text-xs mt-1" style={{ color: '#aaa' }}>
          Leave blank to post anonymously.
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1" style={{ color: '#555' }}>
          Story Title <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Give your story a title..."
          className="w-full rounded-lg px-4 py-2.5 text-sm outline-none"
          style={{ border: '1px solid var(--border)', background: 'var(--background)' }}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1" style={{ color: '#555' }}>
          Your Story <span style={{ color: 'red' }}>*</span>
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={12}
          placeholder="Write your story here... Take your time. There is no rush."
          className="w-full rounded-lg px-4 py-2.5 text-sm outline-none resize-none leading-relaxed"
          style={{ border: '1px solid var(--border)', background: 'var(--background)' }}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={submitting || !title.trim() || !content.trim()}
          className="px-8 py-3 rounded-full text-white font-semibold disabled:opacity-50 transition-opacity hover:opacity-90"
          style={{ background: 'var(--primary)' }}
        >
          {submitting ? 'Publishing...' : 'Publish My Story'}
        </button>
        <p className="text-xs" style={{ color: '#aaa' }}>
          Your story will appear immediately.
        </p>
      </div>
    </form>
  )
}

import StoryForm from '@/components/StoryForm'

export default function NewStoryPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
        Share Your Story
      </h1>
      <p className="mb-10 leading-relaxed" style={{ color: '#666' }}>
        Your experience matters. Writing about anxiety can be deeply healing — and your words
        may be exactly what someone else needs to hear today. There is no right or wrong way
        to tell your story.
      </p>
      <StoryForm />
    </div>
  )
}

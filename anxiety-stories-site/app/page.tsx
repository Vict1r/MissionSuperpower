import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #f3eef9 0%, #faf7f4 60%, #fdf3ea 100%)' }}
      >
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--primary)' }}>
          A Community for Those Who Understand
        </p>
        <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--primary)' }}>
          Mission Superpower
        </h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: '#555' }}>
          Anxiety is not a weakness. It is a signal — and together, we can learn to listen.
          This is a space to share your story, hear others&apos;, and find that you are never alone.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/stories"
            className="px-8 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--primary)' }}
          >
            Read Stories
          </Link>
          <Link
            href="/stories/new"
            className="px-8 py-3 rounded-full font-semibold border-2 transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
          >
            Share Your Story
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6" id="mission">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--primary)' }}>
            Our Mission
          </h2>
          <div
            className="rounded-2xl p-8 md:p-12 leading-relaxed text-lg space-y-5"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: '#444' }}
          >
            <p>
              Anxiety affects millions of people every day — yet so many of us suffer in silence,
              believing we are the only ones who feel this way. We are not.
            </p>
            <p>
              <strong style={{ color: 'var(--primary)' }}>Mission Superpower</strong> was born from
              a simple belief: that sharing our stories has the power to heal — both the person
              telling them and the person listening. When we speak our truth, we reclaim our power.
            </p>
            <p>
              This community exists to create a judgment-free zone where anyone — regardless of age,
              background, or diagnosis — can share their experience with anxiety. Your story matters.
              Your voice matters. And someone out there needs to hear exactly what you have been through.
            </p>
            <p>
              Together, we are transforming anxiety from a source of shame into our greatest
              superpower: the ability to feel deeply, to empathize fully, and to connect authentically.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6" style={{ background: 'var(--muted)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: 'var(--primary)' }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Share Your Story', desc: 'Write about your experience with anxiety — no judgment, no right or wrong way.' },
              { step: '2', title: 'Connect with Others', desc: 'Read stories from the community and leave supportive responses.' },
              { step: '3', title: 'Find Strength Together', desc: 'Discover you are not alone and build resilience through shared experience.' },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl p-8"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: 'var(--primary)' }}
                >
                  {step}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--primary)' }}>{title}</h3>
                <p style={{ color: '#666' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            The Book
          </p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Double Edged Sword
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: '#555' }}>
            The companion book to this community — a powerful guide to understanding
            anxiety and turning it into your greatest strength.
          </p>
          <Link
            href="/book"
            className="px-8 py-3 rounded-full text-white font-semibold inline-block transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)' }}
          >
            Learn More &amp; Get the Book
          </Link>
        </div>
      </section>
    </div>
  )
}

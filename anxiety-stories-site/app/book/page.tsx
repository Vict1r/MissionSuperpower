export default function BookPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #fdf3ea 0%, #faf7f4 60%, #f3eef9 100%)' }}
      >
        <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
          Now Available
        </p>
        <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
          Double Edged Sword
        </h1>
        <p className="text-xl mb-2" style={{ color: '#666' }}>
          by [Author Name]
        </p>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed mt-6" style={{ color: '#555' }}>
          A transformative guide for anyone living with anxiety — revealing how to
          stop fighting your anxiety and start using it as your greatest source of strength.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {/* Replace # with your actual purchase link */}
          <a
            href="#"
            className="px-8 py-4 rounded-full text-white font-bold text-lg transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent)' }}
          >
            Buy Now
          </a>
          <a
            href="#preview"
            className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
          >
            Read a Preview
          </a>
        </div>
      </section>

      {/* About the book */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: 'var(--primary)' }}>
            About the Book
          </h2>
          <div
            className="rounded-2xl p-8 md:p-12 leading-relaxed text-lg space-y-5"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: '#444' }}
          >
            <p>
              Anxiety has two edges. One cuts you — leaving you paralyzed, overwhelmed,
              and exhausted. The other is a sword in your hand — sharpening your awareness,
              deepening your empathy, and fueling your resilience.
            </p>
            <p>
              <em>Double Edged Sword</em> is the result of years of lived experience and
              research into anxiety. It is not a book that tells you to &quot;just breathe&quot;
              or &quot;think positive.&quot; It is an honest, compassionate, and practical
              guide to understanding what anxiety really is — and how to work with it,
              not against it.
            </p>
            <p>
              Whether you have been diagnosed with an anxiety disorder or simply feel the
              weight of daily stress, this book was written for you.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-16 px-6" style={{ background: 'var(--muted)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: 'var(--primary)' }}>
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Why anxiety is not a flaw — it is a feature',
              'The science behind anxiety and how your brain works',
              'Practical tools to ground yourself in the moment',
              'How to communicate your anxiety to loved ones',
              'Turning anxious energy into creative and productive power',
              'Building a life that works with your nervous system',
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl p-5"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <span className="text-xl mt-0.5" style={{ color: 'var(--primary)' }}>✓</span>
                <p style={{ color: '#444' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview section */}
      <section className="py-20 px-6" id="preview">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--primary)' }}>
            Read a Preview
          </h2>
          <div
            className="rounded-2xl p-8 md:p-10 italic leading-relaxed text-lg"
            style={{
              background: 'var(--card)',
              border: '2px solid var(--border)',
              borderLeft: '4px solid var(--accent)',
              color: '#555',
            }}
          >
            <p className="mb-4">
              &ldquo;For most of my life, I believed anxiety was something I needed to defeat.
              I fought it, suppressed it, medicated it, and ran from it. And every time, it
              found me — stronger and louder than before.
            </p>
            <p className="mb-4">
              It was not until I stopped fighting that I began to understand what my anxiety
              was trying to tell me. It was not my enemy. It was the most faithful guardian
              I had ever had — one I had simply never learned to listen to.
            </p>
            <p>
              This book is the conversation I wish I had started years earlier.&rdquo;
            </p>
            <p className="mt-6 not-italic text-sm font-semibold" style={{ color: '#999' }}>
              — Introduction, Double Edged Sword
            </p>
          </div>
        </div>
      </section>

      {/* Buy CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #6b4f8c 0%, #8b6aad 100%)' }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to Transform Your Relationship with Anxiety?
        </h2>
        <p className="text-lg mb-8 text-white/80 max-w-xl mx-auto">
          Get your copy of <em>Double Edged Sword</em> today and take the first step.
        </p>
        {/* Replace # with your actual purchase link (Amazon, Gumroad, etc.) */}
        <a
          href="#"
          className="px-10 py-4 rounded-full font-bold text-lg inline-block transition-opacity hover:opacity-90"
          style={{ background: 'var(--accent)', color: 'white' }}
        >
          Get the Book
        </a>
        <p className="mt-4 text-white/60 text-sm">
          Available in paperback and digital formats.
        </p>
      </section>
    </div>
  )
}

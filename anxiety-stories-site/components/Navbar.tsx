'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/#mission', label: 'Mission' },
    { href: '/stories', label: 'Stories' },
    { href: '/stories/new', label: 'Share Your Story' },
    { href: '/book', label: 'Get the Book' },
  ]

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg" style={{ color: 'var(--primary)' }}>
          Mission Superpower
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: label === 'Share Your Story' ? 'var(--primary)' : 'var(--foreground)' }}
            >
              {label === 'Share Your Story' ? (
                <span
                  className="px-4 py-2 rounded-full text-white text-sm font-medium"
                  style={{ background: 'var(--primary)' }}
                >
                  {label}
                </span>
              ) : label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 mb-1" style={{ background: 'var(--foreground)' }} />
          <div className="w-5 h-0.5 mb-1" style={{ background: 'var(--foreground)' }} />
          <div className="w-5 h-0.5" style={{ background: 'var(--foreground)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm py-1"
              style={{ color: 'var(--foreground)' }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

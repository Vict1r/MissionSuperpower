import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Mission Superpower — Anxiety Stories Community',
  description: 'A safe space to share your anxiety journey. Read stories, share your own, and find community.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t py-8 text-center text-sm" style={{ borderColor: 'var(--border)', color: '#888' }}>
          <p>© {new Date().getFullYear()} Mission Superpower. All rights reserved.</p>
          <p className="mt-1">You are not alone.</p>
        </footer>
      </body>
    </html>
  )
}

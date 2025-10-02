'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname() || '/'
  const nav = [
    ['/', 'Home'],
    ['/services', 'Services'],
    ['/case-studies', 'Case Studies'],
    ['/about', 'About'],
    ['/contact', 'Contact']
  ]

  return (
    <header className="bg-slate-800/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Tagline */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.png" 
            alt="CysertHQ Logo"
            width={120}
            height={120}
            className="rounded-md"
            priority
          />
          <p className="text-xs text-slate-400">
            Security • Compliance • Trust
          </p>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-slate-300">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href as string}
              className={
                path === href
                  ? 'text-white font-medium'
                  : 'hover:text-white'
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden text-slate-300">☰</div>
      </div>
    </header>
  )
}

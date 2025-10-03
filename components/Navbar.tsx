'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const path = usePathname() || '/'
  const [menuOpen, setMenuOpen] = useState(false)

  const nav = [
    ['/', 'Home'],
    ['/services', 'Services'],
    ['/case-studies', 'Case Studies'],
    ['/about', 'About'],
    ['/contact', 'Contact'],
  ]

  return (
    <header className="bg-slate-950 border-b border-slate-800 relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo + Tagline */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto md:h-10" />
          <span className="text-slate-200 text-sm md:text-base whitespace-nowrap">
            Security • Compliance • Trust
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`${
                path === href ? 'text-teal-400' : 'text-slate-300 hover:text-teal-300'
              } transition-colors`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 p-4 bg-slate-900 border-t border-slate-800">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-slate-200 hover:text-teal-300 transition-colors"
              onClick={() => setMenuOpen(false)} // Close menu after clicking
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

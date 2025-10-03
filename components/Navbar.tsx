'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const path = usePathname() || '/'
  const nav = [['/', 'Home'], ['/services','Services'], ['/case-studies','Case Studies'], ['/about','About'], ['/contact','Contact']]
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-teal-500">Logo</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "text-teal-400" : "text-slate-300"}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 border rounded" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 p-4 bg-slate-900">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className="text-slate-200" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

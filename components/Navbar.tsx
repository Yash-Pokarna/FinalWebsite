'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname() || '/'
  const nav = [['/', 'Home'], ['/services','Services'], ['/case-studies','Case Studies'], ['/about','About'], ['/contact','Contact']]
  return (
    <header className="bg-slate-800/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-md flex items-center justify-center font-bold text-slate-900">C</div>
          <div><div className="text-lg font-semibold">CysertHQ</div><div className="text-xs text-slate-400">Security • Compliance • Trust</div></div>
        </div>
        <nav className="hidden md:flex gap-6 text-slate-300">
          {nav.map(([href,label]) => <Link key={href} href={href as string} className={path===href ? 'text-white font-medium' : 'hover:text-white'}>{label}</Link>)}
        </nav>
        <div className="md:hidden text-slate-300">☰</div>
      </div>
    </header>
  )
}

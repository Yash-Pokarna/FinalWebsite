"use client"
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 pt-8 pb-8 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} CysertHQ — All rights reserved.</div>
        <div className="flex gap-4"><a className="hover:text-white">Privacy</a><a className="hover:text-white">Terms</a><a className="hover:text-white">Sitemap</a></div>
      </div>
    </footer>
  )
}

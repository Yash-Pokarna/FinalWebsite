'use client'
import Image from 'next/image'

export default function CaseStudies() {
  const studies = [
    { title: 'Retail Client - ISO 27001', desc: 'Helped achieve certification in 6 months.' },
    { title: 'SaaS - VAPT', desc: 'Found critical issues and guided remediation.' }
  ]

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center">Case Studies</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {studies.map(s => (
            <article key={s.title} className="card">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

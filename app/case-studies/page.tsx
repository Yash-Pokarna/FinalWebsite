"use client"
import { motion } from 'framer-motion'

export default function CaseStudies() {
  const studies = [
    { vertical: 'Finance', title: 'VAPT — Reduced exploitable issues by 92%', detail: 'Comprehensive pen test with remediation verification.' },
    { vertical: 'Healthcare', title: 'ISO 27001 — Certification in 5 months', detail: 'Full ISMS implementation and staff training.' },
    { vertical: 'SaaS', title: 'Risk Assessment — Prioritised remediation', detail: 'Risk register & mitigation roadmap.' }
  ]
  return (
    <div className="py-12">
     {/*<motion.h2 initial={{opacity:0, y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-bold">Case Studies</motion.h2>*/}
      <p className="mt-2 text-slate-400">Selected anonymised client outcomes.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">{studies.map(s => (<div key={s.title} className="p-4 border border-slate-800 rounded-lg"><div className="text-sm text-slate-300">{s.vertical}</div><div className="mt-2 font-semibold">{s.title}</div><p className="mt-2 text-slate-400 text-sm">{s.detail}</p></div>))}</div>
    </div>
  )
}

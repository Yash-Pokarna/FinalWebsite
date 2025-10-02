"use client"
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    { title: 'ISO 27001 Implementation & Audit', bullets: ['Gap analysis & roadmap','ISMS setup','Certification support'] },
    { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', bullets: ['Web & API pentests','Network & cloud assessments','Re-tests & verification'] },
    { title: 'Risk & Compliance Consultancy', bullets: ['Risk assessments','Policy & procedure creation','Controls mapping'] }
  ]
  return (
    <div className="py-12">
      {/*<motion.h2 initial={{opacity:0, y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-bold">Our Services</motion.h2> */}
      <p className="mt-2 text-slate-400">Tailored services to strengthen your security posture.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">{services.map(s => (<article key={s.title} className="card"><h3 className="font-semibold text-lg">{s.title}</h3><ul className="mt-4 text-slate-400 list-disc list-inside">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul><div className="mt-4"><a href="/contact" className="text-cyan-300 hover:underline">Request proposal →</a></div></article>))}</div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    { 
      title: 'ISO 27001 Certification & Compliance Services', 
      body: "In today's digital world, data is one of your most valuable assets - and also your most vulnerable. ISO 27001 is the international gold standard for managing information security. It provides a proven framework to identify risks, safeguard sensitive information, and continuously improve your security posture.", 
      bullets: [
        'Build customer confidence - Show that your business takes data protection seriously',
        'Meet regulatory requirements - Comply with GDPR, HIPAA, and other data security laws.',
        'Reduce risk - Identify vulnerabilities before attackers do.',
        'Gain a competitive edge - Many contracts now require ISO 27001 certification.'
      ], 
    },
    { 
      title: 'Vulnerability Assessment & Penetration Testing', 
      body: "We perform ethical hacking and vulnerability assessments to find and help fix security weaknesses in your infrastructure, web apps, and networks.", 
      bullets: [
        'External network pentest',
        'Web application testing (OWASP Top 10)',
        'Internal infrastructure testing',
        'Remediation guidance & retest'
      ], 
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl sm:text-3xl font-extrabold text-center">Services</motion.h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(s => (
            <article key={s.title} className="card">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.body}</p>
              <ul className="mt-3 list-disc list-inside text-slate-400">
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

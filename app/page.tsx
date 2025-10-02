"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen py-20 relative">
      <div className="particles"></div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.8}} className="hero-glow">
          <h1 className="text-5xl font-extrabold leading-tight">Practical cybersecurity for modern businesses</h1>
          <p className="mt-4 text-slate-300 max-w-xl">CysertHQ delivers ISO 27001 readiness & certification, VAPT, risk assessments, and compliance services with clear remediation plans and measurable outcomes.</p>
          <div className="mt-6 flex gap-4">
            <Link href="/contact" className="btn-primary">Get a quote</Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-md text-slate-300">Our services</Link>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.8}} className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start"><div className="text-sm text-slate-300">Vulnerability Snapshot</div><div className="text-xs text-slate-400">Updated recently</div></div>
            <div className="mt-4 bg-slate-900/40 rounded-md p-4 flex-1 flex items-center justify-center"><svg width="240" height="160" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="160" rx="12" fill="#0F172A"/></svg></div>
            <div className="mt-4 flex gap-2 text-xs text-slate-300"><div className="px-2 py-1 bg-slate-800 rounded">Critical: 1</div><div className="px-2 py-1 bg-slate-800 rounded">High: 4</div><div className="px-2 py-1 bg-slate-800 rounded">Medium: 8</div></div>
          </div>
        </motion.div>
      </section>
      <section className="mt-16 space-y-8 relative z-10">
        <motion.h2 initial={{opacity:0, y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-2xl font-bold">Featured services</motion.h2>
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="grid md:grid-cols-3 gap-6">
          <div className="card"><h3 className="font-semibold">ISO 27001</h3><p className="mt-2 text-slate-400 text-sm">ISMS setup, gap analysis, certification readiness.</p></div>
          <div className="card"><h3 className="font-semibold">VAPT</h3><p className="mt-2 text-slate-400 text-sm">Web, API, and network pentesting.</p></div>
          <div className="card"><h3 className="font-semibold">Risk Consultancy</h3><p className="mt-2 text-slate-400 text-sm">Risk assessments and controls mapping.</p></div>
        </motion.div>
      </section>
    </div>
  )
}

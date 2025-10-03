'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen py-12 relative">
      <div className="particles" aria-hidden="true"></div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8"
      >
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Security · Compliance · Trust
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-xl">
            We help organisations achieve ISO 27001 certification, perform VAPT and manage risk so you can focus on your business with confidence.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">Get a Quote</Link>
            <Link href="/services" className="btn-outline w-full sm:w-auto text-center">Our Services</Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/hero-bg.svg" alt="Security illustration" width={560} height={420} className="max-w-[320px] sm:max-w-sm md:max-w-md" />
        </div>
      </motion.section>

      {/* Services preview */}
      <section className="mt-12 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center">What we offer</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="card">
            <h3 className="font-semibold">ISO 27001</h3>
            <p className="mt-2 text-slate-300">Practical ISO 27001 certification & compliance services.</p>
          </article>
          <article className="card">
            <h3 className="font-semibold">Vulnerability Assessments</h3>
            <p className="mt-2 text-slate-300">External and internal penetration testing services.</p>
          </article>
          <article className="card">
            <h3 className="font-semibold">Security Consultancy</h3>
            <p className="mt-2 text-slate-300">Risk assessments, policy writing and remediation guidance.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

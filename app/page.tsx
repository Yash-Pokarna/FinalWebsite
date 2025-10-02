'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen py-20 relative">
      <div className="particles"></div>

      {/* ✅ Hero Section - Glow around both columns */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ boxShadow: [
            "0 0 20px rgba(56,189,248,0.3)", 
            "0 0 40px rgba(56,189,248,0.6)", 
            "0 0 20px rgba(56,189,248,0.3)"
          ] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-2xl p-10 bg-slate-900/40 border border-slate-700"
        >
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Practical cybersecurity <br className="hidden md:block"/> for modern businesses
            </h1>

            <p className="text-slate-300 max-w-xl">
              CysertHQ delivers ISO 27001 readiness & certification, VAPT, risk assessments, and compliance services with clear remediation plans and measurable outcomes.
            </p>

            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">Get a quote</Link>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-md text-slate-300 hover:bg-slate-800 transition"
              >
                Our services
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Floating Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src="/vector_output.png"
                alt="Cybersecurity illustration"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

   {/* ✅ Featured Services */}
<section className="mt-16 space-y-8 relative z-10">
  <motion.h2
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-2xl font-bold"
  >
    Featured services
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-3 gap-6 text-justify"
  >
        {[
      { title: "ISO 27001", desc: "We help organizations establish, implement, and maintain a robust information security management system, ensuring compliance with international standards and safeguarding critical data. ." },
      { title: "VAPT", desc: "Our experts simulate real-world cyber-attacks to uncover vulnerabilities, evaluate system resilience, and provide actionable recommendations to strengthen your defenses." },
      { title: "Risk Consultancy", desc: "We assess operational, technical, and strategic risks, providing tailored risk management strategies that minimize threats and ensure business continuity." }
    ].map((service, index) => (
      <Link key={index} href="/services" className="block">
        <motion.div
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            rotateY: -5,
            boxShadow: "0px 0px 30px rgba(6,182,212,0.4)"
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="card p-6 rounded-xl bg-slate-900/40 border border-slate-800 cursor-pointer h-full flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div>
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="mt-2 text-slate-400 text-sm">{service.desc}</p>
          </div>
          <span className="mt-4 inline-block text-cyan-400">
            Know more →
          </span>
        </motion.div>
      </Link>
    ))}
  </motion.div>
</section>

    </div>
  )
}

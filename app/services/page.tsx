'use client'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
        
{ 
      title: 'ISO 27001 Certification & Compliance Services', 
      body: "In today's digital world, data is one of your most valuable assets - and also your most vulnerable. ISO 27001 is the international gold standard for managing information security. It provides a proven framework to identify risks, safeguard sensitive information, and demonstrate to customers, partners, and regulators that you take security seriously. At CysertHQ, we help organizations achieve and maintain ISO 27001 certification with a practical, business-focused approach.", 
      bullets: [
        'Build customer confidence - Show that your business takes data protection seriously',
        'Meet regulatory requirements - Comply with GDPR, HIPAA, and other data security laws.',
        'Reduce risk - Identify vulnerabilities before attackers do.',
        'Gain a competitive edge - Many contracts now require ISO 27001 certification.'
      ], 
      body2: "Experienced ISO 27001 consultants with real-world security expertise. Tailored solutions that fit your industry, size, and budget. End-to-end support - from gap analysis to successful certification. Ongoing partnership - we don't just leave after certification; we help you stay compliant." 
    },
    { 
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)', 
      body: "Cyber threats are evolving faster than ever, and even a small security gap can lead to major breaches. Vulnerability Assessment & Penetration Testing (VAPT) is a proactive security service that helps you identify, analyze, and remediate weaknesses in your IT infrastructure, applications, and networks - before cybercriminals exploit them. At CysertHQ, we provide end-to-end VAPT services that simulate real-world attacks to uncover security flaws, then guide you in fixing them. ", 
      bullets: [
        'Prevent costly breaches - Detect and fix vulnerabilities early.',
        'Meet compliance standards - Required for PCI DSS, HIPAA, GDPR, and other regulations.',
        'Enhance customer trust - Show clients you take cybersecurity seriously.',
        'Stay ahead of threats - Test against the latest attack techniques.'
      ], 
      body2: "Our certified ethical hackers combine automated tools with manual expertise to deliver comprehensive VAPT services that go beyond surface-level scans. We provide clear, actionable reports with practical remediation steps, ensuring compliance with global security standards while helping your business strengthen its defenses against real-world attacks." 
    },
    { 
      title: 'Risk & Compliance Consultancy', 
      body: 'In today complex regulatory environment, organizations face constant pressure to meet compliance requirements while managing evolving business risks. Our Risk & Compliance Consultancy service helps you identify potential threats, ensure adherence to legal and industry standards, and implement governance practices that strengthen your organizations reputation and operational stability. At CysertHQ, we combine deep regulatory knowledge with practical risk management strategies to help you stay ahead.', 
      bullets: [
        'Identifies vulnerabilities - Helps uncover weaknesses in systems, processes, and people before they can be exploited', 
        'Prevents financial loss - Reduces the likelihood of costly incidents such as data breaches, downtime, or regulatory fines', 
        'Ensures compliance - Many standards (ISO 27001, GDPR, HIPAA, PCI DSS) require regular risk assessments. Improves decision-making - Provides management with a clear view of potential threats to prioritize resources effectively', 
        'Strengthens resilience - Prepares the organization to respond quickly and recover from security incidents or disruptions'
      ], 
      body2: "Our consultants bring multi-industry experience and deep regulatory expertise to help you navigate complex compliance landscapes with ease. We deliver practical solutions that balance regulatory requirements with operational efficiency, and provide ongoing support to keep your business resilient, compliant, and prepared for emerging risks." 
    }


  ]

  // Grid animation
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  // Each service card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="py-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated cyber glows */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:60px_60px]"></div>

      {/* Title */}
      <motion.h2 
        initial={{ opacity:0, y:15 }} 
        animate={{ opacity:1, y:0 }} 
        transition={{ duration:0.6, ease:"easeOut" }}
        className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center"
      >
        Our Services
      </motion.h2>

      <motion.p 
        initial={{ opacity:0, y:10 }} 
        animate={{ opacity:1, y:0 }} 
        transition={{ duration:0.6, delay:0.2, ease:"easeOut" }}
        className="mt-2 text-slate-400 text-justify max-w-3xl mx-auto leading-relaxed"
      >
        CysertHQ provides end-to-end cybersecurity and compliance solutions designed to protect your business, build trust, and ensure regulatory readiness. Our services cover everything from international security certifications to advanced threat testing and governance frameworks, giving you the confidence to operate securely in a rapidly evolving digital landscape.
      </motion.p>

      {/* Service Cards */}
      <motion.div 
        className="mt-10 grid md:grid-cols-3 gap-8"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((s) => (
          <motion.article 
            key={s.title} 
            className="bg-slate-900/40 p-6 rounded-2xl shadow-md backdrop-blur-md hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] text-justify"
            variants={cardVariants}
          >
            <h3 className="font-semibold text-xl text-cyan-300">{s.title}</h3>
            <p className="mt-2 text-slate-300">{s.body}</p>

            <ul className="mt-4 text-slate-400 list-disc list-inside">
              {s.bullets.map(b => (<li key={b}>{b}</li>))}
            </ul>

            <div className="mt-4">
              <p className="text-slate-300">{s.body2}</p>
            </div>

            <div className="mt-3">
              <a href="/contact" className="text-cyan-300 hover:underline">Request proposal</a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}

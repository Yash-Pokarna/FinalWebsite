'use client'
import { motion } from 'framer-motion'

export default function CaseStudies() {
  const studies = [
    { 
      vertical: 'Government', 
      title: 'Flutter Based Mobile Application Penetration Testing', 
      detail: 'Mobile apps are a prime target for attackers due to the sensitive data they handle, including financial details, authentication tokens, and personal information. The client’s primary concerns were: Ensuring secure authentication and authorization flows. Protecting data at rest and in transit. Preventing reverse engineering and code tampering. Identifying business logic flaws that could be exploited.', 
      body: 'We conducted a comprehensive Mobile Application Penetration Test (MAPT) following OWASP Mobile Security Testing Guide (MSTG) and industry best practices. Our methodology included:', 
      bullets: [
        'Static Analysis - Reverse engineering the APK to analyze code-level security, API endpoints, and hardcoded secrets.',
        'Dynamic Analysis - Testing the app during runtime for insecure data storage, API communication, and authentication weaknesses.',
        'Network Analysis - Intercepting and analyzing traffic for unencrypted or improperly validated data flows.',
        'Business Logic Testing - Simulating real-world attack scenarios to identify flaws in transaction workflows and user privileges.'
      ]
    }, 
    { 
      vertical: 'IT Services and Consulting', 
      title: 'ISO 27001 - Certification in 5 months', 
      detail: 'An established IT consulting and services provider offering cloud solutions, software development, and managed IT services wanted to strengthen its information security posture. With increasing client demands for data protection and compliance, the company aimed to achieve ISO/IEC 27001 certification to build trust and unlock new business opportunities.', 
      body:'The client faced several challenges: Managing sensitive client data across multiple business units and geographies. Lack of a structured Information Security Management System (ISMS). Growing customer requirements for security certifications in RFPs and contracts. Need to align internal teams with security awareness and compliance best practices. Our approach included:', 
      bullets: [
        'Gap Analysis - Assessed current practices against ISO 27001 requirements.', 
        'Risk Assessment - Identified critical risks in IT infrastructure, applications, and processes.' ,
        'ISMS Framework Development - Designed policies, procedures, and controls aligned to business needs.',
        'Implementation & Training - Rolled out security processes and conducted awareness workshops for staff.',
        'Internal Audit & Pre-certification Review - Ensured readiness for external certification audit.'
      ]
    },
    { 
      vertical: 'Education',
      title: 'API VAPT for Online Exam Platform',
      detail: 'A rapidly growing online exam and proctoring platform offering practice tests, live exams, and result analytics via web and mobile apps. The platform exposes multiple REST/GraphQL APIs for authentication, exam delivery, scoring, and reporting.',
      body: 'High exam traffic and sensitive data (question banks, answer sheets, PII) made the API layer a prime target. The client needed to ensure secure authentication, tamper-proof exam flows, and protection of question banks against scraping and automation attacks. We performed a focused Vulnerability Assessment & Penetration Test (VAPT) on the API layer, aligned with OWASP API Security Top 10 and ASVS. Key fixes included:',
      bullets: [
        'IDOR in results API fixed with resource-level checks.',
        'Adaptive rate limiting blocked automated scraping.',
        'Short-lived JWTs with key rotation enforced.',
        'CORS hardened and error leakage removed.'
      ]
    }

  ]

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  }

  // Each card — only fade + slight slide up
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
      {/* Background Gradient Base */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Cyber Glow */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>

      {/* Gridlines */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:60px_60px]"></div>

      {/* Title */}
      <motion.h2 
        initial={{ opacity:0, y:15 }} 
        animate={{ opacity:1, y:0 }} 
        transition={{ duration:0.6, ease:"easeOut" }}
        className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center"
      >
        Case Studies
      </motion.h2>
      
      <motion.p 
        initial={{ opacity:0, y:10 }} 
        animate={{ opacity:1, y:0 }} 
        transition={{ duration:0.6, delay:0.3, ease:"easeOut" }}
        className="mt-4 text-slate-400 text-lg max-w-4xl mx-auto text-justify leading-relaxed"
      >
        Explore how CysertHQ has partnered with organizations across industries to solve complex cybersecurity challenges. These case studies demonstrate our hands-on expertise in ISO 27001 readiness, VAPT, and risk consulting, and how we deliver practical, lasting security improvements.
      </motion.p>
      
      {/* Cards */}
      <motion.div 
        className="mt-10 grid md:grid-cols-3 gap-8"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {studies.map(s => (
          <motion.div 
            key={s.title} 
            className="relative p-6 border border-slate-800 rounded-2xl bg-slate-900/40 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-pointer text-justify overflow-hidden shine-card"
            variants={cardVariants}
          >
            {/* Shine overlay */}
            <div className="shine"></div>

            <div className="text-sm text-blue-400">{s.vertical}</div>
            <div className="mt-2 font-semibold text-lg">{s.title}</div>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">{s.detail}</p>
            {s.body && (
              <p className="mt-4 text-slate-500 text-sm leading-relaxed">{s.body}</p>
            )}
            {s.bullets && (
              <ul className="mt-4 text-slate-400 list-disc list-inside text-sm space-y-1">
                {s.bullets.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .shine-card .shine {
          position: absolute;
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          );
          animation: shineSweep 1.2s ease-out forwards;
        }

        @keyframes shineSweep {
          0% { left: -150%; }
          100% { left: 150%; }
        }
      `}</style>
    </div>
  )
}

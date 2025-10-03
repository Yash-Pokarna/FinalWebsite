'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="relative py-16 overflow-hidden">
      
      {/* Background Gradient Base */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Floating Glow Shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>

      {/* Moving Cyber Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:60px_60px] animate-[gridmove_12s_linear_infinite]"></div>

      <style jsx global>{`
        @keyframes gridmove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 60px 60px, 60px 60px; }
        }
      `}</style>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center drop-shadow-lg"
      >
        Our Story
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="mt-6 text-slate-300 text-lg leading-relaxed text-justify max-w-3xl mx-auto"
      >
        We are CysertHQ, a company founded by cybersecurity professionals united by a shared passion 
        for protecting the digital world. Our team brings years of expertise in offensive and defensive 
        security, compliance, and consulting to help organizations build stronger defenses against evolving threats.
      </motion.p>

      {/* Mission & Vision */}
      <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "Mission",
            desc: "To deliver exceptional cybersecurity services that protect our clients’ critical assets, enhance their operational resilience, and enable sustainable growth.",
            icon: "🚀",
          },
          {
            title: "Vision",
            desc: "To create a safer digital world by pioneering innovative cybersecurity solutions that anticipate and counter emerging threats.",
            icon: "🌐",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * (i + 1), duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-slate-800/40 backdrop-blur border border-slate-700 hover:shadow-cyan-500/30 transition"
          >
            <div className="text-4xl">{item.icon}</div>
            <h4 className="font-semibold text-xl mt-2 text-cyan-300">{item.title}</h4>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Our Approach */}
      <div className="mt-14 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl shadow-md bg-gradient-to-r from-slate-800/60 to-slate-700/40 border border-slate-700"
        >
          <h4 className="font-semibold text-xl text-blue-300">Our Approach</h4>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed text-justify">
            We adopt a proactive, client-centric approach, combining deep industry knowledge with advanced methodologies. 
            By understanding your business needs, we tailor solutions that go beyond compliance and address real-world risks.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-14 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-6 rounded-2xl shadow-md bg-slate-800/40 backdrop-blur border border-slate-700"
        >
          <h2 className="text-3xl font-bold text-cyan-400">Why Choose Us</h2>
          <ul className="mt-4 space-y-3 text-slate-300 text-sm leading-relaxed text-justify">
            <li>✨ <strong>Comprehensive Expertise:</strong> Covering a wide range of cybersecurity needs and certifications.</li>
            <li>⚡ <strong>Tailored Solutions:</strong> Customized strategies for every client.</li>
            <li>🔒 <strong>Proactive Innovation:</strong> Staying ahead with cutting-edge tools.</li>
            <li>🤝 <strong>Trusted Partnerships:</strong> Long-term relationships built on transparency.</li>
            <li>📊 <strong>Proven Results:</strong> Delivering measurable security outcomes.</li>
          </ul>
        </motion.div>
      </div>

      {/* Services */}
      <div className="mt-14 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-6 rounded-2xl shadow-md bg-slate-800/40 backdrop-blur border border-slate-700"
        >
          <h2 className="text-3xl font-bold text-cyan-400">Our Service Portfolio</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Vulnerability Assessments & Penetration Testing",
                desc: "In-depth assessments of web, network, mobile, and wireless environments to uncover vulnerabilities before attackers can exploit them.",
                icon: "🛡️",
              },
              {
                title: "Risk Assessments",
                desc: "Identify and evaluate potential security risks impacting operations, enabling smarter decision-making.",
                icon: "⚖️",
              },
              {
                title: "ISO 27001 Consultancy",
                desc: "Guidance from gap analysis to implementation for successful ISO 27001 certification.",
                icon: "📜",
              },
              {
                title: "Internal Audits",
                desc: "Thorough audits ensuring compliance and validating the effectiveness of your security controls.",
                icon: "🔍",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="p-4 rounded-2xl shadow-md bg-slate-700/30 border border-slate-600 backdrop-blur hover:shadow-cyan-400/20 transition"
              >
                <div className="text-3xl">{service.icon}</div>
                <h4 className="font-semibold text-xl mt-2 text-cyan-300">{service.title}</h4>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed text-justify">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

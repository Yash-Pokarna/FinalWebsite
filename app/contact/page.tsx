'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ name, email, message }) 
      })
      if (res.ok) { 
        setStatus('sent'); setName(''); setEmail(''); setMessage('') 
      } else setStatus('error')
    } catch (err) { setStatus('error') }
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

      <motion.h2 
        initial={{ opacity:0, y:6 }} 
        whileInView={{ opacity:1, y:0 }} 
        viewport={{ once:true }} 
        className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center"
      >
        Contact
      </motion.h2>

      <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-lg text-justify leading-relaxed">
        Tell us about your project and we’ll propose a tailored plan. Our team responds quickly and ensures every conversation is confidential and secure.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4 p-6 border border-slate-800 rounded-2xl bg-slate-900/40 backdrop-blur-md shadow-md text-justify"
          whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div>
            <label className="text-sm text-slate-300">Name</label>
            <input 
              required 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="w-full mt-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input 
              required 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className="w-full mt-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea 
              required 
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              className="w-full mt-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm h-28 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              disabled={status === 'sending'} 
              className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium shadow-md hover:shadow-lg hover:from-cyan-400 hover:to-blue-400 transition"
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
            <div className="text-xs text-slate-400">We respond within 1-2 business days</div>
          </div>
          {status === 'sent' && <div className="text-sm text-green-400">✅ Thanks — we received your message.</div>}
          {status === 'error' && <div className="text-sm text-red-400">❌ Something went wrong. Please try again later.</div>}
        </motion.form>

        {/* Contact Info */}
        <motion.div 
          className="p-6 border border-slate-800 rounded-2xl bg-slate-900/40 backdrop-blur-md shadow-md text-justify"
          whileHover={{ rotateX: -6, rotateY: 6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="text-sm text-slate-300">Email</div>
          <div className="font-medium">cyserthq@gmail.com</div>
          
          <div className="mt-3 text-sm text-slate-300">Phone</div>
          <div className="font-medium">+91 97649 26470</div>
          
          <div className="mt-3 text-sm text-slate-300">Office</div>
          <div className="font-medium leading-relaxed">
            Kothrud, Pune, Maharashtra 411058
          </div>
        </motion.div>
      </div>
    </div>
  )
}

"use client"
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ name, email, message }) })
      if (res.ok) { setStatus('sent'); setName(''); setEmail(''); setMessage('') } else setStatus('error')
    } catch (err) { setStatus('error') }
  }

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-slate-400">Tell us about your project and we'll propose a tailored plan.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4 p-6 border border-slate-800 rounded-lg bg-slate-900/40">
          <div><label className="text-sm text-slate-300">Name</label><input required value={name} onChange={e=>setName(e.target.value)} className="w-full mt-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm" /></div>
          <div><label className="text-sm text-slate-300">Company email</label><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full mt-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm" /></div>
          <div><label className="text-sm text-slate-300">Message</label><textarea required value={message} onChange={e=>setMessage(e.target.value)} className="w-full mt-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm h-28" /></div>
          <div className="flex items-center justify-between"><button disabled={status==='sending'} className="btn-primary">{status==='sending' ? 'Sending...' : 'Send'}</button><div className="text-xs text-slate-400">We respond within 1-2 business days</div></div>
          {status==='sent' && <div className="text-sm text-green-400">Thanks — we received your message.</div>}
          {status==='error' && <div className="text-sm text-red-400">Something went wrong. Please try again later.</div>}
        </form>
        <div className="p-6 border border-slate-800 rounded-lg"><div className="text-sm text-slate-300">Email</div><div className="font-medium">hello@cyserthq.com</div><div className="mt-3 text-sm text-slate-300">Phone</div><div className="font-medium">+91 98765 43210</div><div className="mt-3 text-sm text-slate-300">Office</div><div className="font-medium">Bengaluru, India</div></div>
      </div>
    </div>
  )
}

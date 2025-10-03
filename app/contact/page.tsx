'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sending, setSending] = useState(false)
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl sm:text-3xl font-extrabold text-center">Contact</motion.h1>

        <form className="mt-6 grid grid-cols-1 gap-4" action="/api/contact" method="post">
          <input name="name" placeholder="Your name" className="input" required />
          <input name="email" placeholder="Your email" className="input" type="email" required />
          <textarea name="message" placeholder="Message" className="input h-32" required />
          <div className="flex justify-end">
            <button type="submit" className="btn-primary" disabled={sending}>{sending ? 'Sending...' : 'Send message'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl sm:text-3xl font-extrabold">About CysertHQ</motion.h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            We are a security consultancy focused on helping organizations achieve compliance and improve security posture through practical advice and hands-on assessments.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/image.jpg" alt="Team" width={520} height={380} className="max-w-xs sm:max-w-sm md:max-w-md rounded-md" />
        </div>
      </div>
    </div>
  )
}

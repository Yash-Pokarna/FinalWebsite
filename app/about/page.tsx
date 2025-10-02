import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="py-12">
      {/*<motion.h2 initial={{opacity:0, y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-bold">About CysertHQ</motion.h2> */}
      <p className="mt-3 text-slate-300 max-w-prose">CysertHQ is a team of security professionals focused on delivering pragmatic security and compliance outcomes.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6"><div className="card"><h4 className="font-semibold">Mission</h4><p className="mt-2 text-slate-400 text-sm">Help organisations reduce risk and achieve compliance without friction.</p></div><div className="card"><h4 className="font-semibold">Leadership</h4><p className="mt-2 text-slate-400 text-sm">John Doe — Founder & Head of Consulting (replace with real bios).</p></div></div>
    </div>
  )
}

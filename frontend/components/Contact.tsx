"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Radio } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Secure Channel', value: 'professorcomic1@gmail.com', href: 'mailto:professorcomic1@gmail.com' },
    { icon: Phone, label: 'Comms Line', value: '+254 113 088 424', href: 'tel:+254113088424' },
    { icon: MapPin, label: 'Base Location', value: 'Mombasa, Kenya', href: 'address:1824-80100' }
  ]
  const socialLinks = [
    { icon: Github, href: 'https://github.com/profcomic', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/anthonney-mwanzah-432977354', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs tracking-[.25em] uppercase mb-5"><Radio className="w-4 h-4" /> Communications // Open</div>
        <h2 className="text-4xl md:text-6xl font-black mb-5 gradient-text">Establish Contact</h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">Have a project, collaboration or idea? Open a communication channel and let's build something beyond the ordinary.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="space-panel p-7">
            <div className="flex items-center justify-between mb-6"><h3 className="text-2xl font-bold text-white">Open Channel</h3><span className="text-[10px] font-mono text-emerald-300 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" /> AVAILABLE</span></div>
            <p className="text-slate-400 leading-relaxed">I'm open to new opportunities, creative ideas and collaborations. Select a channel below or transmit a message directly.</p>
          </div>
          <div className="space-y-3">
            {contactInfo.map((info, index) => <motion.a key={info.label} href={info.href} whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 space-panel group"><div className="w-11 h-11 rounded-xl bg-cyan-300/5 border border-cyan-300/10 flex items-center justify-center"><info.icon className="w-5 h-5 text-cyan-300" /></div><div><p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{info.label}</p><p className="text-slate-200 font-medium">{info.value}</p></div></motion.a>)}
          </div>
          <div className="space-panel p-6"><p className="text-xs font-mono text-slate-500 mb-4">EXTERNAL NETWORKS</p><div className="flex gap-3">{socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-300/30 transition-colors"><social.icon className="w-5 h-5" /></a>)}</div></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><ContactForm /></motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 space-panel p-8 md:p-10 text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <h3 className="text-2xl font-bold text-white mb-3">Ready for launch?</h3>
        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">Let's turn your next idea into a working system.</p>
        <motion.button onClick={() => window.open('mailto:professorcomic1@gmail.com?subject=Project Inquiry')} whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-300 to-sky-500 text-slate-950 font-bold shadow-[0_0_25px_rgba(34,211,238,.15)]"><Send className="w-5 h-5" /> Initiate Mission</motion.button>
      </motion.div>
    </div>
  )
}

export default Contact

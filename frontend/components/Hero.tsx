"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Orbit, Sparkles } from 'lucide-react'
import ProfileImage from './ProfileImage'

const Hero: React.FC = () => {
  const [text, setText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const fullText = 'Building scalable systems with Python & TypeScript.'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 500)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/profcomic', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/anthonney-mwanzah-432977354', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:professorcomic1@gmail.com', label: 'Email' },
  ]

  const stack = ['Django', 'Next.js', 'Angular', 'Python', 'TypeScript', 'Data Science', 'Cybersecurity', 'Creative Design']

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[32rem] h-[32rem] rounded-full bg-violet-500/10 blur-3xl" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} className="absolute left-1/2 top-1/2 w-[620px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/5" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
            <div className="flex items-center gap-3 mb-6 text-cyan-300 font-mono text-sm tracking-[.25em] uppercase">
              <span className="h-px w-10 bg-cyan-300/60" />
              <Orbit className="w-4 h-4" />
              <span>Mission Control // Portfolio</span>
            </div>

            <div className="space-panel p-6 md:p-8 mb-7 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="flex items-center justify-between mb-7 pb-4 border-b border-white/10 font-mono text-xs text-slate-500">
                <span>SYS://ANTHONNEY</span>
                <span className="text-cyan-300">● ONLINE</span>
              </div>

              <p className="text-cyan-300 font-mono text-sm mb-2">$ whoami --identity</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">ANTHONNEY <span className="gradient-text">MWANZAH</span></h1>

              <p className="text-cyan-300 font-mono text-sm mb-2">$ describe --role</p>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6">Full-Stack Developer <span className="text-violet-300">×</span> Creative Technologist</p>

              <p className="text-cyan-300 font-mono text-sm mb-2">$ build --mission</p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-7">
                {text}<span className={`inline-block w-0.5 h-5 bg-cyan-300 ml-1 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map(item => <span key={item} className="px-3 py-1.5 rounded-full border border-cyan-300/10 bg-cyan-300/5 text-cyan-100 text-xs font-mono">{item}</span>)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-7">
              <motion.a href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold shadow-[0_0_30px_rgba(34,211,238,.18)]">
                <Sparkles className="w-5 h-5" /> Explore My Work
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-semibold backdrop-blur-xl">
                Establish Contact
              </motion.a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(link => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} whileHover={{ y: -3, scale: 1.05 }} className="p-3 rounded-xl border border-white/10 bg-slate-950/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-300/30">
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }} className="relative flex justify-center">
            <div className="absolute w-[340px] h-[340px] rounded-full border border-cyan-300/10 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[420px] h-[420px] rounded-full border border-violet-400/10 border-dashed animate-[spin_50s_linear_infinite_reverse]" />
            <div className="absolute w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,.9)] top-5 right-16" />
            <ProfileImage />
          </motion.div>
        </div>

        <motion.a href="#about" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-300" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero

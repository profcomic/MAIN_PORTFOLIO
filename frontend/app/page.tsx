"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectsSection from '@/components/ProjectsSection'
import Contact from '@/components/Contact'
import BackgroundBlobs from '@/components/BackgroundBlobs'
import DraggableStatus from '@/components/DraggableStatus'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollProgress from '@/components/ScrollProgress'
import CursorTrail from '@/components/CursorTrail'
import SoundToggle from '@/components/SoundToggle'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 140
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
      setShowMenu(false)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => setShowMenu(true), 180)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    setTimeout(() => setShowMenu(true), 700)
    return () => { window.removeEventListener('scroll', handleScroll); if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current) }
  }, [])

  const navItems = [
    { id: 'home', label: 'Command Deck', icon: '⌂', code: 'CMD-01' },
    { id: 'about', label: 'Crew Profile', icon: '◉', code: 'SYS-02' },
    { id: 'projects', label: 'Mission Archive', icon: '✦', code: 'NAV-03' },
    { id: 'contact', label: 'Comms Array', icon: '◌', code: 'COM-04' },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-cyan-400/30 selection:text-white">
      <BackgroundBlobs />
      <ParticleBackground />
      <CursorTrail />
      <ScrollProgress />

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,.8) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(103,232,249,.65) 0 1px, transparent 1.5px), radial-gradient(circle at 42% 80%, rgba(192,132,252,.7) 0 1px, transparent 1.5px)', backgroundSize: '170px 170px, 230px 230px, 310px 310px' }} />

      <AnimatePresence>
        {showMenu && (
          <motion.header initial={{ opacity: 0, y: -90, scale: .85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -90, scale: .85 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl">
            <nav className="flex items-center gap-2 md:gap-4 p-2 md:p-3 bg-slate-950/80 backdrop-blur-2xl rounded-2xl border border-cyan-300/15 shadow-[0_0_50px_rgba(34,211,238,.08)]">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 border-r border-white/10 shrink-0">
                <div className="relative w-7 h-7 rounded-full border border-cyan-300/50 flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" /><span className="absolute inset-0 rounded-full border border-violet-400/30 animate-ping" /></div>
                <div><p className="text-[9px] font-mono text-cyan-300 tracking-widest">ORBITAL</p><p className="text-[8px] font-mono text-slate-500">ONLINE</p></div>
              </div>
              <div className="flex flex-1 gap-1 overflow-x-auto scrollbar-hide">
                {navItems.map(item => (
                  <motion.a key={item.id} href={`#${item.id}`} whileHover={{ y: -2 }} whileTap={{ scale: .96 }} className={`flex-1 min-w-[110px] md:min-w-0 flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-4 py-2.5 rounded-xl transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-cyan-400/15 via-sky-400/10 to-violet-500/20 text-cyan-200 border border-cyan-300/20 shadow-[0_0_24px_rgba(34,211,238,.08)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                    <span className={activeSection === item.id ? 'text-cyan-300' : 'text-violet-400'}>{item.icon}</span>
                    <span className="font-semibold text-xs md:text-sm whitespace-nowrap">{item.label}</span>
                    <span className="hidden lg:inline text-[8px] font-mono text-slate-600">{item.code}</span>
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <DraggableStatus />
      <SoundToggle />

      <main className="relative z-10">
        <AnimatePresence>
          {isVisible && <>
            <motion.section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}><Hero /></motion.section>
            <motion.section id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="min-h-screen flex items-center justify-center px-6 py-20"><About /></motion.section>
            <motion.section id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="min-h-screen px-6 py-20"><ProjectsSection /></motion.section>
            <motion.section id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="min-h-screen flex items-center justify-center px-6 py-20"><Contact /></motion.section>
          </>}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 border-t border-cyan-300/10 bg-slate-950/60 backdrop-blur-xl px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div><p className="font-mono text-xs text-cyan-300 tracking-[.2em]">ORBITAL NETWORK // ANTHONNEY MWANZAH</p><p className="text-xs text-slate-500 mt-2">Mission status: operational • Mombasa, Kenya • Earth Sector</p></div>
          <p className="text-xs text-slate-600 font-mono">© {new Date().getFullYear()} // ALL SYSTEMS RESERVED</p>
        </div>
      </footer>

      <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Return to command deck" className="fixed bottom-8 right-8 z-40 p-4 bg-slate-950/85 text-cyan-300 border border-cyan-300/20 rounded-full shadow-[0_0_25px_rgba(34,211,238,.12)] backdrop-blur-xl" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: activeSection !== 'home' ? 1 : 0, scale: activeSection !== 'home' ? 1 : 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}><span className="text-lg">↑</span></motion.button>
    </div>
  )
}

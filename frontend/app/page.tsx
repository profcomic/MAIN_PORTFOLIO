"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectsSection from '@/components/ProjectsSection'
import Contact from '@/components/Contact'
import BackgroundBlobs from '@/components/BackgroundBlobs'
import GitHubStatus from '@/components/GitHubStatus'
import DraggableStatus from '@/components/DraggableStatus'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollProgress from '@/components/ScrollProgress'
import CursorTrail from '@/components/CursorTrail'
import SoundToggle from '@/components/SoundToggle'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setIsScrolling(true)
      setShowMenu(false)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
        setShowMenu(true)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: '⌂' },
    { id: 'about', label: 'About', icon: '◉' },
    { id: 'projects', label: 'Projects', icon: '✦' },
    { id: 'contact', label: 'Contact', icon: '◌' },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 transition-colors duration-500 selection:bg-cyan-400/30">
      {/* Cosmic atmosphere */}
      <BackgroundBlobs />
      <ParticleBackground />
      <CursorTrail />
      <ScrollProgress />

      {/* Subtle star-field overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,.75) 0 1px, transparent 1.5px), radial-gradient(circle at 70% 65%, rgba(103,232,249,.6) 0 1px, transparent 1.5px), radial-gradient(circle at 42% 80%, rgba(196,181,253,.5) 0 1px, transparent 1.5px)',
          backgroundSize: '170px 170px, 230px 230px, 310px 310px',
        }}
      />

      {/* Floating orbital navigation */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-4 p-3 bg-slate-950/75 backdrop-blur-2xl rounded-2xl border border-cyan-300/15 shadow-[0_0_45px_rgba(34,211,238,.08)]">
              <div className="flex items-center gap-1.5 px-2" aria-label="online">
                <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.9)] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,.8)] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,.8)] animate-pulse" />
              </div>

              <div className="h-6 w-px bg-white/10" />

              <div className="flex gap-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-400/20 via-sky-400/15 to-violet-400/20 text-cyan-200 border border-cyan-300/20 shadow-[0_0_20px_rgba(34,211,238,.10)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-cyan-300">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DraggableStatus />
      <SoundToggle />

      <main className="relative z-10">
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
                <Hero />
              </motion.section>

              <motion.section id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="min-h-screen flex items-center justify-center px-6 py-20">
                <About />
              </motion.section>

              <motion.section id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="min-h-screen px-6 py-20">
                <ProjectsSection />
              </motion.section>

              <motion.section id="contact" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="min-h-screen flex items-center justify-center px-6 py-20">
                <Contact />
              </motion.section>
            </>
          )}
        </AnimatePresence>
      </main>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Return to top"
        className="fixed bottom-8 right-8 z-40 p-4 bg-slate-950/80 text-cyan-300 border border-cyan-300/20 rounded-full shadow-[0_0_25px_rgba(34,211,238,.12)] hover-lift backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: activeSection !== 'home' ? 1 : 0, scale: activeSection !== 'home' ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  )
}

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Radio } from 'lucide-react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsSection from '@/components/ProjectsSection';
import Contact from '@/components/Contact';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import DraggableStatus from '@/components/DraggableStatus';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollProgress from '@/components/ScrollProgress';
import CursorTrail from '@/components/CursorTrail';
import SoundToggle from '@/components/SoundToggle';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }

      setShowMenu(false);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setShowMenu(true), 180);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(() => setShowMenu(true), 700);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Command Deck', icon: '⌂', code: 'CMD-01', status: 'PRIMARY' },
    { id: 'about', label: 'Crew Profile', icon: '◉', code: 'SYS-02', status: 'SYSTEMS' },
    { id: 'projects', label: 'Mission Archive', icon: '✦', code: 'NAV-03', status: 'MISSIONS' },
    { id: 'contact', label: 'Comms Array', icon: '◌', code: 'COM-04', status: 'COMMS' },
  ];

  return (
    <div className="min-h-screen w-full max-w-full bg-transparent text-slate-100 overflow-x-hidden selection:bg-violet-400/30 selection:text-white">
      <BackgroundBlobs />
      <ParticleBackground />
      <CursorTrail />
      <ScrollProgress />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%,rgba(255,255,255,.8) 0 1px,transparent 1.5px),radial-gradient(circle at 70% 65%,rgba(103,232,249,.65) 0 1px,transparent 1.5px),radial-gradient(circle at 42% 80%,rgba(192,132,252,.7) 0 1px,transparent 1.5px)',
          backgroundSize: '170px 170px,230px 230px,310px 310px',
        }}
      />

      <AnimatePresence>
        {showMenu && (
          <motion.header
            initial={{ opacity: 0, y: -90, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -90, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-0.75rem)] sm:w-[calc(100%-1rem)] max-w-6xl"
          >
            <nav
              aria-label="Orbital navigation"
              className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 p-1.5 sm:p-2 md:p-3 bg-slate-950/80 backdrop-blur-2xl rounded-2xl border border-cyan-300/15 shadow-[0_0_50px_rgba(34,211,238,.08)]"
            >
              <div className="hidden xl:flex items-center gap-2 px-3 py-2 border-r border-white/10 shrink-0">
                <div className="relative w-7 h-7 rounded-full border border-cyan-300/50 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />
                  <span className="absolute inset-0 rounded-full border border-violet-400/30 animate-ping" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-cyan-300 tracking-widest">ORBITAL</p>
                  <p className="text-[8px] font-mono text-slate-500">ONLINE // EARTH</p>
                </div>
              </div>

              <div className="grid grid-cols-4 flex-1 min-w-0 gap-0.5 sm:gap-1 overflow-hidden space-nav">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    title={`${item.status} // ${item.code}`}
                    className={`min-w-0 max-w-full flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-1 sm:px-1.5 md:px-3 lg:px-4 py-2 sm:py-2.5 rounded-xl transition-all overflow-hidden ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-400/15 via-sky-400/10 to-violet-500/20 text-cyan-200 border border-cyan-300/20 shadow-[0_0_24px_rgba(34,211,238,.08)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="shrink-0 text-[10px] sm:text-xs md:text-sm">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-[8px] sm:text-[9px] md:text-xs lg:text-sm whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                      {item.label}
                    </span>
                    <span className="hidden xl:inline text-[8px] font-mono text-slate-600 shrink-0">
                      {item.code}
                    </span>
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <DraggableStatus />
      <SoundToggle />

      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.section
                id="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-full overflow-x-hidden"
              >
                <Hero />
              </motion.section>

              <motion.section
                id="about"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="min-h-screen w-full max-w-full flex items-center justify-center px-3 sm:px-6 py-16 sm:py-20 overflow-x-hidden"
              >
                <About />
              </motion.section>

              <motion.section
                id="projects"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="min-h-screen w-full max-w-full px-3 sm:px-6 py-16 sm:py-20 overflow-x-hidden"
              >
                <ProjectsSection />
              </motion.section>

              <motion.section
                id="contact"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="min-h-screen w-full max-w-full flex items-center justify-center px-3 sm:px-6 py-16 sm:py-20 overflow-x-hidden"
              >
                <Contact />
              </motion.section>
            </>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 w-full max-w-full border-t border-cyan-300/10 bg-slate-950/65 backdrop-blur-xl px-3 sm:px-6 py-8 sm:py-10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            <div>
              <p className="font-mono text-xs text-cyan-300 tracking-[.2em]">ORBITAL NETWORK</p>
              <p className="font-semibold text-white mt-1">ANTHONNEY MWANZAH // CREW-01</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
              <Radio className="w-3 h-3 text-emerald-300" />
              MISSION STATUS: OPERATIONAL
            </div>
            <div className="md:text-right">
              <p className="text-xs text-slate-500">Mombasa, Kenya // EARTH SECTOR</p>
              <p className="text-[10px] text-slate-700 font-mono mt-1">© {new Date().getFullYear()} // ALL SYSTEMS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Return to Command Deck"
        title="Return to Command Deck"
        className="fixed bottom-4 right-3 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2 px-3 py-3 bg-slate-950/85 text-cyan-300 border border-cyan-300/20 rounded-full shadow-[0_0_25px_rgba(34,211,238,.12)] backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: activeSection !== 'home' ? 1 : 0,
          scale: activeSection !== 'home' ? 1 : 0,
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-4 h-4" />
        <span className="hidden sm:inline text-[9px] font-mono tracking-wider">CMD</span>
      </motion.button>
    </div>
  );
}

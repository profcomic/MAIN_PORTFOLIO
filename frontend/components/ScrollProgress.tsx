"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0
      );
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none"
      aria-label={`Mission progress ${Math.round(progress)} percent`}
    >
      <div className="h-px bg-cyan-300/5" />

      {/* Progress Bar */}
      <motion.div
        className="relative h-[2px] origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_10px_rgba(34,211,238,.45)]"
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
      >
        <span className="absolute right-0 -top-[2px] w-1.5 h-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,249,.9)]" />
      </motion.div>

      {/* Mission Percentage HUD Badge */}
      <div className="absolute right-3 top-2 hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-950/70 border border-cyan-300/10 backdrop-blur-md">
        <span className="text-[8px] font-mono tracking-wider text-cyan-300">
          MISSION {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
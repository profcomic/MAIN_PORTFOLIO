"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfileImageProps { className?: string }

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .4 }} className={`relative ${className}`}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} className="absolute -inset-5 rounded-full border border-cyan-300/20 border-dashed" />
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/30 via-sky-500/10 to-violet-500/30 blur-xl animate-pulse" />
        <motion.div whileHover={{ scale: 1.04, rotate: 1 }} className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-300/50 bg-slate-950 shadow-[0_0_60px_rgba(34,211,238,.16)]">
          <Image src="/images/profile.jpg" alt="ANTHONNEY MWANZAH" width={320} height={320} className="w-full h-full object-cover" onError={(e) => { const target = e.target as HTMLImageElement; target.style.display = 'none'; target.nextElementSibling?.classList.remove('hidden') }} />
          <div className="hidden absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(103,232,249,.28),transparent_30%),linear-gradient(135deg,#0f172a,#020617)] items-center justify-center">
            <div className="text-center text-white"><div className="text-7xl mb-3">✦</div><div className="font-mono text-sm tracking-widest">ANTHONNEY</div><div className="text-xs text-cyan-300 mt-1">SYSTEM OPERATOR</div></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-cyan-300/5 pointer-events-none" />
        </motion.div>
        {[...Array(4)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" animate={{ rotate: 360 }} transition={{ duration: 4 + i, repeat: Infinity, ease: 'linear' }} style={{ top: `${8 + i * 23}%`, left: `${i % 2 ? 92 : -2}%` }} />)}
      </div>
    </motion.div>
  )
}

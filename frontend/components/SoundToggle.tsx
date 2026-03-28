"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(false)
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)

  useEffect(() => {
    // Initialize audio context on user interaction
    const initAudio = () => {
      if (!audioContext) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
        setAudioContext(ctx)
        
        // Create a subtle ambient sound
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(ctx.destination)
        
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(432, ctx.currentTime) // Healing frequency
        gainNode.gain.setValueAtTime(0.05, ctx.currentTime) // Very low volume
        
        oscillator.start()
        
        oscillatorRef.current = oscillator
        gainNodeRef.current = gainNode
      }
    }

    document.addEventListener('click', initAudio, { once: true })
    return () => document.removeEventListener('click', initAudio)
  }, [audioContext])

  const toggleSound = () => {
    if (!gainNodeRef.current) return
    
    if (isMuted) {
      gainNodeRef.current.gain.setValueAtTime(0.05, audioContext!.currentTime)
    } else {
      gainNodeRef.current.gain.setValueAtTime(0, audioContext!.currentTime)
    }
    
    setIsMuted(!isMuted)
  }

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed bottom-8 right-8 z-40 p-3 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-full border border-purple-500/30 shadow-2xl hover:shadow-3xl transition-shadow"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: isMuted ? 0 : 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        ) : (
          <Volume2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        )}
      </motion.div>
    </motion.button>
  )
}

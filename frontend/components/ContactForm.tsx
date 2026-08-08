"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, MessageSquare, Send, CheckCircle, Radio } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim()) next.name = 'Name is required'
    if (!formData.email.trim()) next.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) next.email = 'Enter a valid email'
    if (!formData.subject.trim()) next.subject = 'Subject is required'
    if (!formData.message.trim()) next.message = 'Message is required'
    else if (formData.message.length < 10) next.message = 'Message must be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      if (response.ok) { setStatus('success'); setFormData({ name: '', email: '', subject: '', message: '' }); setErrors({}) } else setStatus('error')
    } catch (error) { console.error('Form submission error:', error); setStatus('error') }
    setTimeout(() => setStatus('idle'), 3000)
  }

  const inputClass = (field: string) => `w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${errors[field] ? 'border-rose-400/70' : 'border-white/10'} text-slate-100 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/10 transition-all placeholder:text-slate-600`

  return (
    <div className="space-panel p-7 md:p-8">
      <div className="flex items-center justify-between mb-7"><div><p className="text-[10px] font-mono tracking-[.2em] text-cyan-300 mb-2">TRANSMISSION CONSOLE</p><h3 className="text-2xl font-bold text-white">Send A Message</h3></div><Radio className="w-6 h-6 text-cyan-300 animate-pulse" /></div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2"><User className="w-3.5 h-3.5" /> NAME</label><input type="text" name="name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Your name" className={inputClass('name')} />{errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}</div>
          <div><label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2"><Mail className="w-3.5 h-3.5" /> EMAIL</label><input type="email" name="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="you@example.com" className={inputClass('email')} />{errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}</div>
        </div>
        <div><label className="text-xs font-mono text-slate-400 mb-2 block">SUBJECT</label><input type="text" name="subject" value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))} placeholder="Project inquiry" className={inputClass('subject')} />{errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}</div>
        <div><label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2"><MessageSquare className="w-3.5 h-3.5" /> MESSAGE</label><textarea name="message" value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} placeholder="Tell me about your mission..." rows={6} className={`${inputClass('message')} resize-none`} />{errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}</div>
        <motion.button type="submit" disabled={status !== 'idle'} whileHover={status === 'idle' ? { scale: 1.01 } : {}} whileTap={status === 'idle' ? { scale: .99 } : {}} className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${status === 'idle' ? 'bg-gradient-to-r from-cyan-300 to-sky-500 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,.14)]' : status === 'sending' ? 'bg-slate-800 text-slate-500' : status === 'success' ? 'bg-emerald-400 text-slate-950' : 'bg-rose-500 text-white'}`}>
          {status === 'idle' && <><Send className="w-5 h-5" /> Transmit Message</>}
          {status === 'sending' && <><div className="w-5 h-5 border-2 border-slate-500 border-t-cyan-300 rounded-full animate-spin" /> Transmitting...</>}
          {status === 'success' && <><CheckCircle className="w-5 h-5" /> Transmission Received</>}
          {status === 'error' && <>Transmission Failed — Retry</>}
        </motion.button>
      </form>
    </div>
  )
}

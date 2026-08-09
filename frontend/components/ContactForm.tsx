"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Radio,
  ShieldCheck,
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const e: Record<string, string> = {};

    if (!formData.name.trim()) e.name = 'Crew identifier is required';

    if (!formData.email.trim()) {
      e.email = 'Return channel is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Enter a valid transmission address';
    }

    if (!formData.subject.trim()) e.subject = 'Mission subject is required';

    if (!formData.message.trim()) {
      e.message = 'Transmission payload is required';
    } else if (formData.message.length < 10) {
      e.message = 'Payload must contain at least 10 characters';
    }

    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (r.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const input = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-[#02030a]/80 border ${
      errors[field] ? 'border-red-500/70' : 'border-cyan-300/10'
    } text-slate-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all placeholder-slate-600`;

  return (
    <div className="relative space-panel rounded-2xl p-8 border border-cyan-300/10">
      {/* Encryption Badge */}
      <div className="absolute top-3 right-4 flex items-center gap-2 text-[9px] font-mono text-slate-600">
        <ShieldCheck className="w-3 h-3 text-emerald-300" />
        ENCRYPTED UPLINK
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-10 rounded-xl bg-cyan-300/10 border border-cyan-300/15 flex items-center justify-center">
          <Radio className="w-5 h-5 text-cyan-300" />
        </div>
        <div>
          <p className="hud-label">TRANSMISSION PROTOCOL</p>
          <h3 className="text-2xl font-semibold text-white">
            Send a Transmission
          </h3>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <User className="w-4 h-4 text-cyan-300" />
              Crew Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Professor Comic"
              className={input('name')}
            />
            {errors.name && (
              <p className="text-red-400 text-xs font-mono">⚠ {errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Mail className="w-4 h-4 text-cyan-300" />
              Return Channel
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="professorcomic1@gmail.com"
              className={input('email')}
            />
            {errors.email && (
              <p className="text-red-400 text-xs font-mono">⚠ {errors.email}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Mission Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Project Inquiry"
            className={input('subject')}
          />
          {errors.subject && (
            <p className="text-red-400 text-xs font-mono">⚠ {errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
            <MessageSquare className="w-4 h-4 text-cyan-300" />
            Transmission Payload
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your mission..."
            rows={5}
            className={`${input('message')} resize-none`}
          />
          {errors.message && (
            <p className="text-red-400 text-xs font-mono">⚠ {errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status !== 'idle'}
          className={`w-full py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
            status === 'idle'
              ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,.15)]'
              : status === 'sending'
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
              : status === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
          whileHover={status === 'idle' ? { scale: 1.02 } : {}}
          whileTap={status === 'idle' ? { scale: 0.98 } : {}}
        >
          {status === 'idle' && (
            <>
              <Send className="w-5 h-5" />
              Transmit Payload
            </>
          )}
          {status === 'sending' && (
            <>
              <div className="w-5 h-5 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
              Establishing Uplink...
            </>
          )}
          {status === 'success' && (
            <>
              <CheckCircle className="w-5 h-5" />
              Transmission Received
            </>
          )}
          {status === 'error' && (
            <span className="text-red-200">
              Transmission failed. Re-establish channel and retry.
            </span>
          )}
        </motion.button>
      </form>
    </div>
  );
}
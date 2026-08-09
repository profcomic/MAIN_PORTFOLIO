"use client";

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Radio,
  Satellite,
  Signal,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'professorcomic1@gmail.com',
      href: 'mailto:professorcomic1@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 113 088 424',
      href: 'tel:+254113088424',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mombasa, Kenya',
      href: 'address:1824-80100',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/profcomic',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/anthonney-mwanzah-432977354',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://x.com/',
      label: 'X (Twitter)',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-violet-300 font-mono text-xs tracking-[.25em] mb-5">
          <Radio className="w-4 h-4" />
          COMMS ARRAY // COM-04
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Interstellar Communications
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Details & Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Channel Intro Panel */}
          <div className="space-panel rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <Signal className="w-5 h-5 text-cyan-300" />
                <span className="absolute inset-0 animate-ping opacity-20">
                  <Signal className="w-5 h-5 text-cyan-300" />
                </span>
              </div>
              <div>
                <p className="hud-label">Secure Channel</p>
                <h3 className="text-2xl font-semibold text-white">
                  Let's Connect
                </h3>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              I'm open to discussing new opportunities, creative ideas, or
              potential collaborations. Whether you're looking for a software or
              website developer, graphic designer, creative professional,
              Digital Tutor, videographer or want to discuss a project, any technological
              solution I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 p-4 space-panel rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="relative w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-300/10 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-cyan-300" />
                  <div className="absolute inset-0 rounded-full border border-violet-400/20 animate-pulse" />
                </div>
                <div>
                  <p className="hud-label">{info.label}</p>
                  <p className="text-slate-200 font-medium">{info.value}</p>
                </div>
                <span className="ml-auto text-violet-300">↗</span>
              </motion.a>
            ))}
          </div>

          {/* Social Links Panel */}
          <div className="space-panel rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="w-4 h-4 text-violet-300" />
              <h4 className="text-lg font-semibold text-white">
                Network Frequencies
              </h4>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-300/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Transmission Console */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-panel rounded-2xl p-5 md:p-7"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="hud-label">Transmission Console</p>
              <h3 className="text-xl font-semibold text-white">
                Send a Transmission
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              CHANNEL OPEN
            </div>
          </div>
          <ContactForm />
        </motion.div>
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="space-panel rounded-2xl p-8 max-w-4xl mx-auto border border-violet-400/15">
          <Satellite className="w-7 h-7 mx-auto mb-4 text-violet-300" />
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to Launch a Project?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time
            opportunities. Let's create something amazing together!
          </p>
          <motion.button
            onClick={() =>
              window.open(
                'mailto:professorcomic1@gmail.com?subject=Project Inquiry'
              )
            }
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 rounded-lg font-medium shadow-[0_0_25px_rgba(34,211,238,.16)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
            Initiate Transmission
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
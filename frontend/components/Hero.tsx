"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import ProfileImage from './ProfileImage';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = 'Building the future using cutting-edge technologies..';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);

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
      icon: Mail,
      href: 'mailto:professorcomic1@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex mb-7 space-panel rounded-lg overflow-hidden border border-cyan-300/15">
              <div className="w-full">
                <div className="bg-slate-900/70 px-4 py-2 flex items-center gap-2 border-b border-white/10">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-xs font-mono text-slate-400">
                    portfolio.ts — orbital command deck
                  </span>
                </div>

                <div className="p-5 sm:p-6 font-mono text-left">
                  <p className="text-cyan-300 text-sm mb-2">$ whoami</p>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    ANTHONNEY MWANZAH
                  </h1>
                  <h5 className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
                    Nerd by Nature. Human by Design.
                 </h5>
                  <p className="text-cyan-300 text-lg mb-2">$ describe --role</p>
                  <p className="text-slate-200 text-xl md:text-2xl leading-relaxed mb-6">
                    Space Enthusiast | Fullstack Developer | Creative Professional | Digital Ambassador | Orchestrator | Space Enthusiast
                    | AI-VR Enthusiast |
                  </p>
                  <p className="text-cyan-300 text-sm mb-2">$ describe --stack</p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
                    {text}
                    <span
                      className={`inline-block w-0.5 h-5 bg-cyan-300 ml-1 ${
                        cursorVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Django',
                      'Next.js',
                      'Angular',
                      'Python',
                      'TypeScript',
                      'Graphic Design',
                      'Data Science',
                      'Cybersecurity',
                      'AI & ML',
                      'VR/AR Development',
                      'Space-Tech',
                      'Video Editing',
                    ].map((x) => (
                      <span
                        key={x}
                        className="px-3 py-1 rounded-md text-sm font-medium bg-cyan-400/5 border border-cyan-300/15 text-cyan-200"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                A relentless problem-solver dedicated to turning complex challenges into
                simple, intuitive solutions. Expert in architecting scalable systems
                and exploring the frontiers of Space-Tech and AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 rounded-lg font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-3 border border-white/10 text-slate-300 rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-cyan-300/10 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[350px] h-[350px] sm:w-[390px] sm:h-[390px] rounded-full border border-violet-400/10 border-dashed animate-[spin_50s_linear_infinite_reverse]" />
            <ProfileImage />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

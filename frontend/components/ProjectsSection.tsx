"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';
import {
  ExternalLink,
  Github,
  Filter,
  Orbit,
  Radio,
  Satellite,
  Palette,
  FileText,
  Camera,
  Video,
  Code2,
} from 'lucide-react';

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const CATEGORIES = [
    'All',
    'Software',
    'Brochures',
    'Graphic Design',
    'Branding',
    'UI/UX Design',
    'Photography',
    'Video Production',
    'Motion Graphics',
    'Python',
    'Django',
    'Next.js',
    'React',
    'Angular',
    'Flask',
    'Data Science',
    'Cybersecurity',
  ];

  const apiBase =
    process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

  useEffect(() => {
    fetch(`${apiBase}/projects/`)
      .then((r) => r.json())
      .then((d) => {
        setProjects(d);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setProjects([
          {
            id: 1,
            title: 'HARNESSERS YOUTHS HUB WEBSITE',
            description:
              'A full interactive website for Harnessers built using the Next.js framework.',
            tech_stack: ['Software', 'Next.js', 'TypeScript', 'UI/UX Design'],
            github_url: 'https://github.com/profcomic/HARNESSERS-NETWORK',
            live_demo: 'https://harnessers-hub.vercel.app/',
            image:
              'https://api.microlink.io/?url=https://harnessers-hub.vercel.app/&screenshot=true&embed=screenshot.url',
          },
          {
            id: 2,
            title: 'FLOQPULSE MANAGEMENT SYSTEM',
            description:
              'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            tech_stack: ['Software', 'Django', 'Python'],
            github_url: 'https://github.com/profcomic/FLOQPULSE',
            live_demo: 'https://floqpulse.com',
            image:
              'https://api.microlink.io/?url=https://github.com/profcomic/FLOQPULSE/&screenshot=true&embed=screenshot.url',
          },
          {
            id: 3,
            title: 'TGG CARRY DECK CRANE BROCHURE',
            description:
              'Industrial brochure design showcasing the Broderson IC-80-1G carry deck crane, its capabilities, applications, and visual presentation.',
            tech_stack: ['Brochures', 'Graphic Design', 'Branding', 'Print Design'],
            github_url: '',
            live_demo: '/documents/carry_deck_crane_bronchure.pdf',
            image: '/images/projects/bronchure_mockup.svg',
          },
          {
            id: 4,
            title: 'GRAPHIC DESIGN COLLECTION',
            description:
              'A curated collection of graphic design work including posters, promotional artwork, campaign graphics, and digital visual communication.',
            tech_stack: ['Graphic Design', 'Branding', 'UI/UX Design'],
            github_url: '',
            live_demo: '',
            image: '/images/projects/graphic-design/collection-cover.svg',
          },
          {
            id: 5,
            title: 'VISUAL BRANDING MISSIONS',
            description:
              'Brand identity and visual communication work developed for digital campaigns, organizations, and promotional projects.',
            tech_stack: ['Branding', 'Graphic Design', 'Motion Graphics'],
            github_url: '',
            live_demo: '',
            image: '/images/projects/branding/collection-cover.svg',
          },
          {
            id: 6,
            title: 'VISUAL MEDIA EXPEDITIONS',
            description:
              'Photography, video production, and visual storytelling projects created for communication, promotion, and digital media.',
            tech_stack: ['Photography', 'Video Production', 'Motion Graphics'],
            github_url: '',
            live_demo: '',
            image: '/images/projects/visual-media/collection-cover.svg',
          },
        ]);
        setLoading(false);
      });
  }, [apiBase]);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tech_stack.includes(filter));

  const filterIcon = (category: string) => {
    if (category === 'Software' || ['Python', 'Django', 'Next.js', 'React', 'Angular', 'Flask', 'Data Science', 'Cybersecurity'].includes(category)) {
      return <Code2 className="w-3.5 h-3.5" />;
    }
    if (category === 'Brochures') return <FileText className="w-3.5 h-3.5" />;
    if (category === 'Graphic Design' || category === 'Branding' || category === 'UI/UX Design') {
      return <Palette className="w-3.5 h-3.5" />;
    }
    if (category === 'Photography') return <Camera className="w-3.5 h-3.5" />;
    if (category === 'Video Production' || category === 'Motion Graphics') {
      return <Video className="w-3.5 h-3.5" />;
    }
    return <Orbit className="w-3.5 h-3.5" />;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="relative mx-auto w-14 h-14">
            <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
            <div className="absolute inset-1 rounded-full border-t-2 border-cyan-300 animate-spin" />
            <Satellite className="absolute inset-0 m-auto w-5 h-5 text-violet-300" />
          </div>
          <p className="mt-4 text-cyan-300 font-mono text-xs tracking-[.2em]">
            SCANNING PROFESSOR COMIC MISSION ARCHIVE...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-violet-300 font-mono text-xs tracking-[.25em] mb-5">
          <Orbit className="w-4 h-4" />
          MISSION ARCHIVE // PROFESSOR COMIC // NAV-03
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Mission Archive
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          A visual and technical record of Professor Comic&apos;s deployed software,
          brochure publications, graphic design, branding, UI/UX, photography,
          video, and motion-graphics missions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-panel rounded-2xl p-4 md:p-5 mb-12"
      >
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/5 border border-cyan-300/10">
            <Filter className="w-4 h-4 text-cyan-300" />
            <span className="hud-label">Mission Sector</span>
          </div>

          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,.16)]'
                  : 'bg-white/[.03] text-slate-400 border border-white/10 hover:border-violet-400/40 hover:text-violet-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterIcon(category)}
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="flex items-center justify-between mb-5 px-1">
        <div className="flex items-center gap-2 text-slate-500">
          <Radio className="w-4 h-4 text-cyan-300" />
          <span className="font-mono text-xs tracking-wider">
            TRANSMISSIONS: {filteredProjects.length} // STATUS: ACTIVE
          </span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-violet-300/70">
          ORBITAL INDEX // {filter}
        </span>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                type: 'spring',
                bounce: 0.3,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="space-panel p-12 text-center text-slate-400">
          No missions found in{' '}
          <span className="font-semibold text-cyan-300">{filter}</span> sector.
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-panel rounded-2xl p-8 max-w-3xl mx-auto border border-violet-400/15 text-center"
      >
        <Satellite className="w-7 h-7 mx-auto mb-4 text-violet-300" />
        <h3 className="text-2xl font-bold mb-4 text-white">
          Explore the Professor Comic Fleet
        </h3>
        <p className="text-slate-400 mb-6">
          Explore the complete collection of Professor Comic&apos;s software,
          creative design, publication, and visual missions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://github.com/profcomic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            Open Mission Control
          </motion.a>
          <motion.a
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-violet-300/15 text-violet-200 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5" />
            Full Mission Registry
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;

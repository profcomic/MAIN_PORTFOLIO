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
} from 'lucide-react';

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const TECHNOLOGIES = [
    'All',
    'Python',
    'Django',
    'TypeScript',
    'Next.js',
    'Angular',
    'React',
    'Flask',
    'Data Science',
    'Cybersecurity',
    'Graphic Design',
    'Photography',
    'Video Production',
    'UI/UX Design',
    'Motion Graphics',
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
            title: "HARNESSERS YOUTHS HUB WEBSITE",
            description: "A full interactive website for harnessers built using the Next.js framework.",
            tech_stack: ["Next.js"],
            github_url: "https://github.com/profcomic/HARNESSERS-NETWORK",
            live_demo: "https://harnessers-hub.vercel.app/",
            image: "https://api.microlink.io/?url=https://harnessers-hub.vercel.app/&screenshot=true&embed=screenshot.url",
            project_date: "2026-06-15",
            created_at: "2026-06-15T10:00:00Z",
            updated_at: "2026-06-15T10:00:00Z"
          },
          {
            id: 2,
            title: "FLOQPULSE MANAGEMENT SYSTEM",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            tech_stack: ["Django"],
            github_url: "https://github.com/pofcomic/floqpulse",
            live_demo: "https://floqpulse.com",
            image: "https://api.microlink.io/?url=https://github.com/pofcomic/floqpulse/&screenshot=true&embed=screenshot.url",
            project_date: "2026-02-20",
            created_at: "2026-12-20T14:30:00Z",
            updated_at: "2026-12-20T14:30:00Z"
          },
          {
            id: 3,
            title: "Blog Platform",
            description: "A modern blogging platform with markdown support, SEO optimization, and social media integration.",
            tech_stack: ["Flask", "Python", "SQLite", "Bootstrap"],
            github_url: "https://github.com/profcomic",
            live_demo: "https://blog-demo.com",
            image: "https://api.microlink.io/?url=https://github.com/profcomic/&screenshot=true&embed=screenshot.url",
            project_date: "2026-03-10",
            created_at: "2026-03-10T09:15:00Z",
            updated_at: "2026-03-10T09:15:00Z"
          },
          {
            id: 4,
            title: 'Extensive Modern Website',
            description:
              'A full-featured website with e-commerce section built with Django, featuring user authentication, payment processing, and inventory management.',
            tech_stack: ['Django'],
            github_url: 'https://github.com/yourusername/BBC DJANGO WEBSITE',
            live_demo: 'https://bbcmsa.com',
            image: '/api/placeholder/400/300',
          },
          {
            id: 5,
            title: 'Management System',
            description:
              'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            tech_stack: ['Django'],
            github_url: 'https://github.com/yourusername/floqpulse',
            live_demo: 'https://floqpulse.com',
            image: '/api/placeholder/400/300',
          },
          {
            id: 6,
            title: 'Weather Dashboard',
            description:
              'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed meteorological data visualization.',
            tech_stack: ['Angular', 'TypeScript', 'Chart.js', 'OpenWeather API'],
            github_url: 'https://github.com/yourusername/weather-dashboard',
            live_demo: 'https://weather-demo.com',
            image: '/api/placeholder/400/300',
          },
          {
            id: 7,
            title: 'Blog Platform',
            description:
              'A modern blogging platform with markdown support, SEO optimization, and social media integration.',
            tech_stack: ['Flask', 'Python', 'SQLite', 'Bootstrap'],
            github_url: 'https://github.com/yourusername/blog-platform',
            live_demo: 'https://blog-demo.com',
            image: '/api/placeholder/400/300',
          },
        ]);
        setLoading(false);
      });
  }, [apiBase]);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.tech_stack.includes(filter));

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
            SCANNING MISSION LOGS...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-violet-300 font-mono text-xs tracking-[.25em] mb-5">
          <Orbit className="w-4 h-4" />
          MISSION ARCHIVE // NAV-03
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Mission Archive
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          A selection of my recent work showcasing different technologies and
          approaches to solving real-world problems.
        </p>
      </motion.div>

      {/* Filter Sector Panel */}
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
            <span className="hud-label">Sector Filter</span>
          </div>
          {TECHNOLOGIES.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tech
                  ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,.16)]'
                  : 'bg-white/[.03] text-slate-400 border border-white/10 hover:border-violet-400/40 hover:text-violet-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Telemetry Status Bar */}
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

      {/* Projects Grid */}
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

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="space-panel p-12 text-center text-slate-400">
          No missions found in{' '}
          <span className="font-semibold text-cyan-300">{filter}</span> sector.
        </div>
      )}

      {/* Footer Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-panel rounded-2xl p-8 max-w-2xl mx-auto border border-violet-400/15 text-center"
      >
        <Satellite className="w-7 h-7 mx-auto mb-4 text-violet-300" />
        <h3 className="text-2xl font-bold mb-4 text-white">
          Explore the Full Mission Fleet
        </h3>
        <p className="text-slate-400 mb-6">
          Check out my GitHub profile for a complete collection of my open-source
          projects and contributions.
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
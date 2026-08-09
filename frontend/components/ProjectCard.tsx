"use client";

import { motion } from 'framer-motion';
import { Project } from '@/types';
import {
  Github,
  ExternalLink,
  Calendar,
  Satellite,
  Radio,
  Orbit,
} from 'lucide-react';

interface Props {
  project: Project;
  className?: string;
}

const getProjectLogo = (title: string, techStack: string[]) => {
  const text = `${title} ${techStack.join(' ')}`.toLowerCase();

  if (text.includes('weather') || text.includes('openweather')) {
    return {
      icon: '☄',
      gradient: 'from-cyan-300 to-sky-500',
      sector: 'DEEP SPACE',
    };
  }
  if (
    text.includes('brand') ||
    text.includes('design') ||
    text.includes('logo')
  ) {
    return {
      icon: '✦',
      gradient: 'from-violet-300 to-fuchsia-500',
      sector: 'CREATIVE ORBIT',
    };
  }
  if (text.includes('security')) {
    return {
      icon: '◈',
      gradient: 'from-rose-300 to-violet-500',
      sector: 'DEFENSE GRID',
    };
  }
  if (text.includes('django') || text.includes('python')) {
    return {
      icon: '⌘',
      gradient: 'from-emerald-300 to-cyan-400',
      sector: 'CORE SYSTEMS',
    };
  }
  if (text.includes('next') || text.includes('react')) {
    return {
      icon: '◉',
      gradient: 'from-sky-300 to-cyan-400',
      sector: 'WEB ORBIT',
    };
  }

  return {
    icon: '◇',
    gradient: 'from-cyan-300 to-violet-400',
    sector: 'EXPLORATION',
  };
};

export default function ProjectCard({ project, className }: Props) {
  const logo = getProjectLogo(project.title, project.tech_stack);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      className={`space-panel overflow-hidden group ${className || ''}`}
    >
      {/* Visual Header / Banner */}
      <div className="relative h-52 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(34,211,238,.14),transparent_45%),#020617]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle,rgba(255,255,255,.7) 1px,transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Orbit animations & Logo Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute w-36 h-36 rounded-full border border-cyan-300/20 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute w-44 h-20 rounded-[50%] border border-violet-400/20"
          />
          <div
            className={`text-7xl font-black bg-gradient-to-r ${logo.gradient} bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,.25)]`}
          >
            {logo.icon}
          </div>
        </div>

        {/* Mission Badges */}
        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-slate-950/70 border border-white/10 text-[10px] font-mono text-cyan-300">
          MISSION {String(project.id).padStart(3, '0')}
        </div>
        <div className="absolute bottom-4 left-4 px-2 py-1 rounded-md bg-violet-500/10 border border-violet-300/15 text-[9px] font-mono text-violet-200">
          SECTOR // {logo.sector}
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
          ACTIVE
        </div>

        {/* Hover Overlay Uplink */}
        <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-cyan-300 tracking-[.2em]">
            UPLINK ESTABLISHED
          </span>
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open mission source"
              className="p-3 rounded-xl bg-white/10 border border-white/10 text-white hover:text-cyan-300"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live_demo && (
            <a
              href={project.live_demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open live mission"
              className="p-3 rounded-xl bg-white/10 border border-white/10 text-white hover:text-cyan-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-cyan-300 text-[10px] font-mono">
            <Satellite className="w-3 h-3" />
            DEPLOYMENT RECORD
          </div>
          <Radio className="w-3 h-3 text-violet-300" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech_stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-mono rounded-md bg-cyan-300/5 border border-cyan-300/10 text-cyan-200"
            >
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 4 && (
            <span className="px-2 py-1 text-[10px] rounded-md bg-violet-400/5 border border-violet-300/10 text-violet-200">
              +{project.tech_stack.length - 4}
            </span>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex gap-2">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mission source"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.live_demo && (
              <a
                href={project.live_demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live mission"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
            <Calendar className="w-3 h-3" />
            YEAR {new Date().getFullYear()}
          </div>
          <Orbit className="w-3 h-3 text-violet-300/60" />
        </div>
      </div>
    </motion.div>
  );
}
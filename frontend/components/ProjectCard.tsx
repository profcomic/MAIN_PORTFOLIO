"use client"
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { Github, ExternalLink, Calendar } from 'lucide-react'

interface Props {
  project: Project;
  className?: string;
}

// Function to get logo/icon for each project
const getProjectLogo = (projectTitle: string, techStack: string[]) => {
  const title = projectTitle.toLowerCase()
  const tech = techStack.map(t => t.toLowerCase()).join(' ')
  
  // Tech company logos
  if (title.includes('e-commerce') || tech.includes('stripe')) {
    return {
      icon: '🛒',
      gradient: 'from-blue-500 to-purple-500',
      bgPattern: 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20'
    }
  }
  if (title.includes('task') || tech.includes('socket.io')) {
    return {
      icon: '📋',
      gradient: 'from-green-500 to-emerald-500',
      bgPattern: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
    }
  }
  if (title.includes('weather') || tech.includes('openweather')) {
    return {
      icon: '🌤️',
      gradient: 'from-cyan-500 to-blue-500',
      bgPattern: 'bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20'
    }
  }
  
  // Creative projects
  if (title.includes('brand') || title.includes('logo') || tech.includes('figma')) {
    return {
      icon: '🎨',
      gradient: 'from-purple-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20'
    }
  }
  if (title.includes('photography') || tech.includes('photoshop')) {
    return {
      icon: '📸',
      gradient: 'from-orange-500 to-red-500',
      bgPattern: 'bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20'
    }
  }
  if (title.includes('video') || tech.includes('after effects')) {
    return {
      icon: '🎬',
      gradient: 'from-red-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20'
    }
  }
  if (title.includes('social media') || tech.includes('canva')) {
    return {
      icon: '📱',
      gradient: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20'
    }
  }
  if (title.includes('fashion') || tech.includes('lightroom')) {
    return {
      icon: '👗',
      gradient: 'from-pink-500 to-rose-500',
      bgPattern: 'bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20'
    }
  }
  if (title.includes('documentary') || tech.includes('storytelling')) {
    return {
      icon: '🎥',
      gradient: 'from-gray-600 to-gray-800',
      bgPattern: 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/20 dark:to-gray-900/20'
    }
  }
  if (title.includes('ui/ux') || tech.includes('design system')) {
    return {
      icon: '🎯',
      gradient: 'from-indigo-500 to-purple-500',
      bgPattern: 'bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20'
    }
  }
  
  // Default tech projects
  if (tech.includes('django') || tech.includes('python')) {
    return {
      icon: '🐍',
      gradient: 'from-green-500 to-blue-500',
      bgPattern: 'bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20'
    }
  }
  if (tech.includes('next.js') || tech.includes('react')) {
    return {
      icon: '⚛️',
      gradient: 'from-cyan-500 to-blue-500',
      bgPattern: 'bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20'
    }
  }
  if (tech.includes('angular') || tech.includes('typescript')) {
    return {
      icon: '🅰️',
      gradient: 'from-red-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20'
    }
  }
  
  // Fallback
  return {
    icon: '💻',
    gradient: 'from-gray-500 to-slate-500',
    bgPattern: 'bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20'
  }
}

export default function ProjectCard({ project, className }: Props) {
  const projectLogo = getProjectLogo(project.title, project.tech_stack)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      className={`glass-morphism rounded-xl overflow-hidden border border-white/20 hover-lift group ${className}`}
    >
      {/* Project Image with Logo Background */}
      <div className={`relative h-48 ${projectLogo.bgPattern} overflow-hidden`}>
        {/* Logo Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-8xl font-bold bg-gradient-to-r ${projectLogo.gradient} bg-clip-text text-transparent`}>
              {projectLogo.icon}
            </div>
          </div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`
          }} />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github_url && (
            <motion.a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {project.live_demo && (
            <motion.a
              href={project.live_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-primary-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech_stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
            >
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              +{project.tech_stack.length - 3} more
            </span>
          )}
        </div>

        {/* Project Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex gap-2">
            {project.github_url && (
              <motion.a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
            {project.live_demo && (
              <motion.a
                href={project.live_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
          </div>
          
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Calendar className="w-3 h-3" />
            <span>
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

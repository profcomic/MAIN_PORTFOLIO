"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'
import { ExternalLink, Github, Filter, Radar } from 'lucide-react'

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const TECHNOLOGIES = ['All', 'Python', 'Django', 'TypeScript', 'Next.js', 'Angular', 'React', 'Flask', 'Data Science', 'Cybersecurity', 'Graphic Design', 'Photography', 'Video Production', 'UI/UX Design', 'Motion Graphics']

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(res => res.json()).then(data => { setProjects(data); setLoading(false) })
      .catch(err => {
        console.error('Fetch error:', err)
        setProjects([
          { id: 1, title: 'Extensive Modern Website', description: 'A full-featured website with e-commerce capabilities, authentication, payments and inventory management.', tech_stack: ['Django'], github_url: 'https://github.com/yourusername/BBC DJANGO WEBSITE', live_demo: 'https://bbcmsa.com', image: '/api/placeholder/400/300' },
          { id: 2, title: 'Management System', description: 'A collaborative task management application with real-time updates, drag-and-drop functionality and team collaboration.', tech_stack: ['Django'], github_url: 'https://github.com/yourusername/floqpulse', live_demo: 'https://floqpulse.com', image: '/api/placeholder/400/300' },
          { id: 3, title: 'Weather Dashboard', description: 'A weather dashboard with location forecasts, interactive maps and detailed meteorological visualization.', tech_stack: ['Angular', 'TypeScript', 'Chart.js', 'OpenWeather API'], github_url: 'https://github.com/yourusername/weather-dashboard', live_demo: 'https://weather-demo.com', image: '/api/placeholder/400/300' },
          { id: 4, title: 'Blog Platform', description: 'A modern blogging platform with markdown support, SEO optimization and social media integration.', tech_stack: ['Flask', 'Python', 'SQLite', 'Bootstrap'], github_url: 'https://github.com/yourusername/blog-platform', live_demo: 'https://blog-demo.com', image: '/api/placeholder/400/300' }
        ])
        setLoading(false)
      })
  }, [])

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tech_stack.includes(filter))

  if (loading) return <div className="flex items-center justify-center min-h-[400px]"><div className="text-center"><div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-300" /><p className="mt-4 text-slate-400 font-mono">Scanning mission archive...</p></div></div>

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs tracking-[.25em] uppercase mb-5"><Radar className="w-4 h-4" /> Archive // Deployments</div>
        <h2 className="text-4xl md:text-6xl font-black mb-5 gradient-text">Mission Archive</h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">Selected systems, experiments and creative deployments from the development journey.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-panel p-4 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {TECHNOLOGIES.map(tech => <motion.button key={tech} onClick={() => setFilter(tech)} whileHover={{ y: -2 }} whileTap={{ scale: .96 }} className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${filter === tech ? 'bg-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(103,232,249,.2)]' : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-300/30'}`}>{tech}</motion.button>)}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => <motion.div key={project.id} layout initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }} transition={{ duration: .35, delay: index * .06 }}><ProjectCard project={project} /></motion.div>)}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && <div className="text-center py-12 text-slate-500 font-mono">No mission found for // {filter}</div>}

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-panel p-8 max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Explore The Full Fleet</h3>
        <p className="text-slate-400 mb-6">Inspect the complete open-source mission archive and ongoing experiments.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://github.com/profcomic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-300 text-slate-950 font-bold hover:scale-105 transition-transform"><Github className="w-5 h-5" /> GitHub Fleet</a>
          <a href="/projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/30"><ExternalLink className="w-5 h-5" /> All Missions</a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectsSection

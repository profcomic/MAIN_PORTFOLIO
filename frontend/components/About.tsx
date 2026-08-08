"use client"

import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Cloud, Shield, Orbit, Radio } from 'lucide-react'

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, technologies: ['Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Javascript'], color: 'from-cyan-400 to-sky-500' },
    { category: 'Backend', icon: Server, technologies: ['Python', 'Django', 'Flask', 'Node.js'], color: 'from-emerald-400 to-cyan-500' },
    { category: 'Design & Creative', icon: Smartphone, technologies: ['Corel Draw', 'Photoshop', 'Illustrator', 'Brand Design'], color: 'from-violet-400 to-fuchsia-500' },
    { category: 'Data Science & AI', icon: Cloud, technologies: ['Python', 'Power BI', 'Pandas', 'Machine Learning', 'Data Analysis'], color: 'from-orange-400 to-amber-500' },
    { category: 'Cybersecurity', icon: Shield, technologies: ['Network Security', 'Penetration Testing', 'Security Analysis', 'Risk Assessment', 'Compliance'], color: 'from-rose-400 to-violet-500' }
  ]
  const experience = [
    { title: 'Full Stack Developer', company: 'Phroneo Spectacular Space', period: '2024 - Present', description: 'Developing scalable web applications using modern technologies and best practices.' },
    { title: 'Junior Developer', company: 'Digital Agency', period: '2020 - 2021', description: 'Created responsive websites and contributed to various client projects.' }
  ]
  return <div className="max-w-7xl mx-auto">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="text-center mb-16">
      <div className="inline-flex items-center gap-2 text-violet-300 font-mono text-xs tracking-[.25em] uppercase mb-5"><Radio className="w-4 h-4" /> CREW PROFILE // HUMAN INTELLIGENCE</div>
      <h2 className="text-4xl md:text-6xl font-black mb-6 gradient-text">About Me</h2>
      <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">I'm a passionate full-stack developer with expertise in building modern, scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
    </motion.div>
    <div className="mb-20"><div className="flex items-center justify-center gap-3 mb-12"><Orbit className="w-5 h-5 text-cyan-300" /><h3 className="text-2xl font-bold text-white">Technical Skills // Systems</h3><Orbit className="w-5 h-5 text-violet-300" /></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill,index)=><motion.div key={skill.category} initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.6,delay:.1*index}} whileHover={{scale:1.04,y:-5}} className="space-panel p-6"><div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-5`}><skill.icon className="w-6 h-6 text-slate-950"/></div><h4 className="font-bold text-lg text-white mb-4">{skill.category}</h4><div className="flex flex-wrap gap-2">{skill.technologies.map(tech=><span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">{tech}</span>)}</div></motion.div>)}
    </div></div>
    <div><div className="flex items-center justify-center gap-3 mb-12"><Radio className="w-5 h-5 text-cyan-300"/><h3 className="text-3xl font-bold text-white">Experience // Mission History</h3></div><div className="relative max-w-5xl mx-auto"><div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent"/><div className="space-y-10">
      {experience.map((exp,index)=><motion.div key={index} initial={{opacity:0,x:index%2?40:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className={`relative flex ${index%2?'md:justify-end':'md:justify-start'}`}><div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.8)] mt-7"/><div className="w-full md:w-[45%] pl-12 md:pl-0"><div className="space-panel p-6"><p className="text-cyan-300 text-xs font-mono mb-2">LOG // {exp.period}</p><h4 className="text-xl font-bold text-white">{exp.title}</h4><p className="text-violet-300 font-medium mt-1 mb-3">{exp.company}</p><p className="text-slate-400 leading-relaxed">{exp.description}</p></div></div></motion.div>)}
    </div></div></div>
    <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-20 space-panel p-8 md:p-10 text-center"><p className="text-cyan-300 font-mono text-xs tracking-[.2em] mb-4">STATUS // CONTINUOUS LEARNING</p><h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Beyond Code // Exploration</h3><p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, enjoying outdoor activities, or reading about the latest trends in AI and machine learning. I believe in continuous learning and staying curious about the world around us.</p></motion.div>
  </div>
}
export default About

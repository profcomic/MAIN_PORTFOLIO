"use client";

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Server,
  Cloud,
  Code2,
  Rocket,
  ShieldCheck,
  Users,
} from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: [
        'Next.js',
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Javascript',
      ],
      color: 'from-cyan-400 to-sky-500',
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Python', 'Django', 'Flask', 'Node.js'],
      color: 'from-emerald-400 to-cyan-500',
    },
    {
      category: 'Design & Creative',
      icon: Smartphone,
      technologies: [
        'Corel Draw',
        'Photoshop',
        'Illustrator',
        'Brand Design',
      ],
      color: 'from-violet-400 to-fuchsia-500',
    },
    {
      category: 'Data Science & AI',
      icon: Cloud,
      technologies: [
        'Python',
        'Power BI',
        'Pandas',
        'Machine Learning',
        'Data Analysis',
      ],
      color: 'from-cyan-400 to-violet-500',
    },
    {
      category: 'Cybersecurity',
      icon: Server,
      technologies: [
        'Network Security',
        'Penetration Testing',
        'Security Analysis',
        'Risk Assessment',
        'Compliance',
      ],
      color: 'from-violet-500 to-cyan-400',
    },
  ];

  const experience = [
    {
      title: 'Freelancer Techie',
      company: 'Remote',
      period: '2025 - Present',
      description:
        'Creating responsive websites and contributed to various client projects encompassing Design, Data and General technological solutions.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Phroneo Spectacular Space',
      period: '2024 - Present',
      description:
        'Developing scalable web applications using modern technologies and best practices and integration of AI & VR for Space exploration.',
    },
    {
      title: 'Volunteer',
      company: 'Taifa Teule Network - Nrb',
      period: 'September, 2024 - Present',
      description:
        "I serve as a mentor and facilitator for emerging leaders, guiding them through leadership development and community impact strategies. My contribution extends into the Communications Department, where I volunteer my technical expertise in Graphic Design and Video Editing to craft compelling visual narratives that amplify the network's mission. By merging leadership mentorship with digital storytelling, I help bridge the gap between visionary ideas and impactful community engagement.",
    },
    {
      title: 'Tech Dept Volunteer',
      company: 'Swahilipot Hub Foundation - Msa',
      period: 'April, 2024 - Present',
      description:
        "I leverage my 'Multicore' technical background to foster a vibrant innovation ecosystem by providing hands-on mentorship in software & Website development and general tech. I play a key role in facilitating technical workshops that drive digital literacy while supporting the hub's infrastructure to ensure a seamless environment for community members.",
    },
    {
      title: 'ICT Instructor & Supervisor',
      company: 'Unik Driving School LTD HQ - Msa',
      period: 'April, 1st 2026 - June, 1st 2026',
      description:
        'I oversee digital operations and technical training, ensuring the seamless integration of technology within professional environments.',
    },
    {
      title: 'Assistant Office Administrator - Internship',
      company: 'Silverfox Lotella - Msa',
      period: 'June, 2023 - September, 2023',
      description:
        'In this role, I streamlined office operations by managing administrative workflows, client communications, and detailed documentation. Leveraging my background in Business Management, I ensured organizational efficiency and supported the management team in maintaining high service standards within a fast-paced environment.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-slate-100">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="text-cyan-300 font-mono text-xs tracking-[.25em] mb-5">
          CREW PROFILE // ABOUT
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          I'm a multi-disciplinary professional and a relentless explorer of
          the "next." As the Founder of Phroneo Spectacular Space, I operate at
          the intersection of Full-Stack Development, Data Analytics,
          Cybersecurity, Digital Marketing, Graphics Designing, Videography, And
          Creative and Arts fueled by a deep-seated obsession with Space
          Exploration and the transformative power of AI and Virtual Reality.
          <br />
          <br />
          Furthermore, I love turning complex problems into simple, beautiful,
          and intuitive solutions. My background in Business Management
          combined with technical expertise in computer science allows me to
          build scalable web applications that are as functional as they are
          visionary. Whether I am architecting a digital ecosystem or advocating
          for STEM equity, I bring an analytical, 'multicore' perspective to
          every challenge.
          <br />
          <br />
          As a dedicated STEM Ambassador, I am committed to ensuring that the
          tools of the future—from immersive VR simulations to AI-driven
          insights—are accessible to everyone.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-center mb-12 text-white font-mono tracking-wide">
          Technical Skills // Systems
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-slate-950/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-300/15 shadow-[0_0_30px_rgba(34,211,238,.05)]"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <skill.icon className="w-6 h-6 text-slate-950" />
              </div>
              <h4 className="font-semibold text-lg mb-3 text-white">
                {skill.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-full bg-cyan-400/5 border border-cyan-300/20 text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-center mb-12 text-white font-mono tracking-wide">
          Experience // Mission History
        </h3>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-sky-500 to-violet-500" />
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? 'text-right md:pr-8'
                      : 'text-left md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-950/70 backdrop-blur-xl rounded-2xl p-6 border border-cyan-300/15 shadow-[0_0_30px_rgba(34,211,238,.05)]"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-cyan-300 font-medium mb-1 text-sm">
                      {exp.company}
                    </p>
                    <p className="text-xs font-mono text-violet-300 mb-3">
                      {exp.period}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-300 rounded-full border-4 border-slate-950 shadow-[0_0_12px_rgba(103,232,249,.8)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Beyond Code Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl font-bold mb-8 text-white font-mono tracking-wide">
          Beyond Code // Exploration
        </h3>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Work Continuation */}
          <div className="bg-slate-950/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-300/15 text-left">
            <h4 className="text-lg font-semibold mb-3 text-cyan-300 flex items-center">
              <span className="mr-2">💻</span> When Terminal Closes
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              My work continues at the intersection of innovation and impact. As
              a Learning Architect and STEM Ambassador, I am dedicated to
              bridging the digital divide by designing human-centered solutions
              and transformative learning experiences. I thrive on continuous
              curiosity—whether exploring AI trends, contributing to open-source,
              or architecting secure systems.
            </p>
          </div>

          {/* Creative Soul */}
          <div className="bg-slate-950/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-300/15 text-left">
            <h4 className="text-lg font-semibold mb-3 text-violet-300 flex items-center">
              <span className="mr-2">🖋️</span> The Creative Soul
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              I am a writer at heart, operating under the moniker "When Silent
              Pen Meets Professor." From poetry and novels to motivational
              reflections, I view writing as a borderless sanctuary where I turn
              life's encounters into stories that aim to make the world a
              better place... my writing pads sometimes get tired of the things
              I pour out...
            </p>
          </div>

          <div className="pt-4">
            <h4 className="text-lg font-semibold mb-6 text-slate-300 font-mono">
              📚 When not doing these nerdy stuffs...
            </h4>
          </div>

          {/* Harmony & Movement */}
          <div className="bg-slate-950/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-300/15 text-left">
            <h4 className="text-lg font-semibold mb-3 text-cyan-300 flex items-center">
              <span className="mr-2">🎵</span> Harmony & Movement
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm mb-4">
              Music is my secondary language. You'll find me:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300 text-sm">
              <div className="flex items-start">
                <span className="mr-2">🎤</span>
                <div>
                  <strong className="text-cyan-200">Vocalizing:</strong> Lending
                  my voice to choir and exploring new ranges.
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2">🎹</span>
                <div>
                  <strong className="text-cyan-200">Instrumental:</strong> Behind
                  the piano or drums, with a growing interest in strings.
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2">💃</span>
                <div>
                  <strong className="text-cyan-200">In Motion:</strong> Channeling
                  my inner MJ—dance is a constant rhythm in my mind....dancing in
                  the mind..
                </div>
              </div>
            </div>
          </div>

          {/* Nature & Exploration */}
          <div className="bg-slate-950/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-300/15 text-left">
            <h4 className="text-lg font-semibold mb-3 text-violet-300 flex items-center">
              <span className="mr-2">🌊</span> Nature & Exploration
            </h4>
            <p className="text-slate-400 leading-relaxed text-sm mb-4">
              I describe myself as an ambivert with the depth of an
              ocean—alternating between quiet reflection and powerful drive. I
              recharge through:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300 text-sm">
              <div className="flex items-start">
                <span className="mr-2">🏞️</span>
                <div>
                  <strong className="text-violet-200">The Great Outdoors:</strong>{' '}
                  Finding peace and relief in natural landscapes.
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2">🌍</span>
                <div>
                  <strong className="text-violet-200">
                    Digital & Physical Travel:
                  </strong>{' '}
                  Immersing myself in new cultures or expansive worlds of video
                  games.
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-2">😄</span>
                <div>
                  <strong className="text-violet-200">Humor:</strong> Believing
                  that a well-timed joke is just as essential as a clean line of
                  code.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Expertise */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 text-center"
      >
        <h4 className="text-2xl font-bold mb-12 text-white font-mono tracking-wide">
          Core Expertise
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-950/70 border border-cyan-300/15 backdrop-blur-xl">
            <div className="p-3 bg-cyan-400/10 rounded-xl mb-4 text-cyan-300 border border-cyan-300/20">
              <Code2 size={28} />
            </div>
            <h5 className="font-bold mb-2 text-white">Development</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Software & Web Development, Scalable Architecture.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-950/70 border border-violet-400/15 backdrop-blur-xl">
            <div className="p-3 bg-violet-400/10 rounded-xl mb-4 text-violet-300 border border-violet-400/20">
              <Rocket size={28} />
            </div>
            <h5 className="font-bold mb-2 text-white">Emerging Tech</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI & VR Integration, Space-Tech Exploration.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-950/70 border border-cyan-300/15 backdrop-blur-xl">
            <div className="p-3 bg-cyan-400/10 rounded-xl mb-4 text-cyan-300 border border-cyan-300/20">
              <ShieldCheck size={28} />
            </div>
            <h5 className="font-bold mb-2 text-white">Security & Insights</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cybersecurity Analysis, Data Analytics, Business Strategy.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-950/70 border border-violet-400/15 backdrop-blur-xl">
            <div className="p-3 bg-violet-400/10 rounded-xl mb-4 text-violet-300 border border-violet-400/20">
              <Users size={28} />
            </div>
            <h5 className="font-bold mb-2 text-white">Leadership</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Digital Literacy, Inclusive Tech, STEM Mentorship.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
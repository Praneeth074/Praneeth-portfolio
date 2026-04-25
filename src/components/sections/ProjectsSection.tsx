'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        '.project-card-item',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '#projects', start: 'top 75%', toggleActions: 'play none none none' }
        }
      )
    }
    init()
  }, [])

  return (
    <section id="projects" className="py-32 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">02</span>
            <div className="w-12 h-px bg-gray-200" />
            <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">Projects</span>
          </div>
          <a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link text-xs text-gray-400 hover:text-black transition-colors tracking-widest uppercase flex items-center gap-2"
          >
            View all on GitHub <ArrowUpRight size={12} />
          </a>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold leading-tight tracking-tight mb-16 text-black"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Selected work
        </motion.h2>

        {/* Featured Projects – Large cards */}
        <div className="space-y-6 mb-8">
          {PROJECTS.filter(p => p.featured).map((project, i) => (
            <div
              key={project.id}
              className="project-card-item opacity-0 project-card group rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-transparent"
              style={{ background: project.color }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="grid lg:grid-cols-2 gap-0 min-h-[380px]">
                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                        0{i + 1}
                      </span>
                      <div className="w-8 h-px bg-gray-200" />
                      <span className="text-xs tracking-widest uppercase font-medium" style={{ color: project.accentColor }}>
                        {project.subtitle}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-4xl lg:text-5xl text-black mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-sm text-[0.95rem]">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} className="relative z-10" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-black transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual panel */}
                <div
                  className="relative flex items-center justify-center overflow-hidden min-h-[200px] lg:min-h-0"
                  style={{ background: `linear-gradient(135deg, ${project.color}, white)` }}
                >
                  <motion.div
                    animate={activeProject === project.id ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center p-10"
                  >
                    <div
                      className="text-9xl font-display font-bold opacity-10 leading-none tracking-tighter"
                      style={{ color: project.accentColor }}
                    >
                      {project.title.slice(0, 2)}
                    </div>
                  </motion.div>

                  {/* Hover overlay */}
                  <motion.div
                    className="project-card-overlay rounded-none"
                    style={{ background: project.accentColor + 'ee' }}
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white font-medium text-sm"
                    >
                      View Project <ArrowUpRight size={18} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Smaller project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.filter(p => !p.featured).map((project, i) => (
            <div
              key={project.id}
              className="project-card-item opacity-0 project-card rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
              style={{ background: project.color }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-widest uppercase font-medium" style={{ color: project.accentColor }}>
                    {project.subtitle}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github size={16} className="text-gray-400 hover:text-accent transition-colors" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <ExternalLink size={16} className="text-gray-400 hover:text-accent transition-colors" />
                    </a>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-black mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-400 bg-white/60">{t}</span>
                  ))}
                </div>
              </div>
              {/* Bottom hover line */}
              <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: project.accentColor }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

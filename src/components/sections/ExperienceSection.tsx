'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCE } from '@/lib/data'
import { MapPin } from 'lucide-react'

export function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Animate the vertical timeline line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1, duration: 1.5, ease: 'power3.out',
            scrollTrigger: { trigger: '#experience', start: 'top 70%', toggleActions: 'play none none none' }
          }
        )
      }

      // Cards stagger reveal
      gsap.fromTo(
        '.exp-card',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '#experience', start: 'top 70%', toggleActions: 'play none none none' }
        }
      )
    }
    init()
  }, [])

  return (
    <section id="experience" className="py-32 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">04</span>
          <div className="w-12 h-px bg-gray-200" />
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold tracking-tight mb-16 text-black"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-100" aria-hidden="true">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-black origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="space-y-0 pl-10">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="exp-card opacity-0 timeline-item relative pb-14 last:pb-0">
                {/* Dot */}
                <div className="timeline-dot" aria-hidden="true" />

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-6 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-400"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-black mb-1">{exp.role}</h3>
                      <p className="text-accent font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-mono text-gray-400 mb-1">{exp.period}</p>
                      <p className="flex items-center gap-1 text-xs text-gray-400 justify-end">
                        <MapPin size={10} />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100 group-hover:border-gray-200 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

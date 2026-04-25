'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'

const categories = Object.keys(SKILLS) as (keyof typeof SKILLS)[]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof SKILLS>('Languages')
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top 75%',
        once: true,
        onEnter: () => {
          setAnimated(true)
          gsap.fromTo(
            '.skill-chip',
            { opacity: 0, scale: 0.8, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.04, ease: 'power3.out' }
          )
        }
      })
    }
    init()
  }, [])

  const currentSkills = SKILLS[activeCategory]

  return (
    <section id="skills" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">03</span>
          <div className="w-12 h-px bg-gray-200" />
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">Skills</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: category tabs + progress bars */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold tracking-tight mb-10 text-black"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Tech I work with
            </motion.h2>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-4 py-2 rounded-full border font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-black text-white border-black'
                      : 'bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Progress bars */}
            <AnimatedSkillBars skills={currentSkills} animated={animated} key={activeCategory} />
          </div>

          {/* Right: all chips grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium"
            >
              Full stack — at a glance
            </motion.h3>

            <div className="flex flex-wrap gap-2.5">
              {Object.values(SKILLS).flat().map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-chip opacity-0 relative z-0 text-sm px-4 py-2.5 rounded-full border border-gray-200 text-gray-600 font-medium select-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  data-cursor="hover"
                  title={`${skill.level}% proficiency`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>

            {/* Decorative SVG */}
            <motion.svg
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 w-full"
              height="60"
              viewBox="0 0 400 60"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M0 30 Q100 10 200 30 T400 30"
                stroke="#e5e7eb"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M0 40 Q100 20 200 40 T400 40"
                stroke="#0052CC"
                strokeWidth="0.5"
                fill="none"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedSkillBars({
  skills,
  animated,
}: {
  skills: { name: string; level: number }[]
  animated: boolean
}) {
  return (
    <div className="space-y-6">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-black">{skill.name}</span>
            <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                transform: animated ? `scaleX(${skill.level / 100})` : 'scaleX(0)',
                transitionDelay: `${i * 0.1}s`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

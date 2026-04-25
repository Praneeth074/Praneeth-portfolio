'use client'
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { STATS, SITE } from '@/lib/data'
import { Download } from 'lucide-react'

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const inView = useInView(statsRef, { once: true, margin: '-100px' })

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Paragraph text stagger reveal
      gsap.fromTo(
        '.about-para',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-text-wrap', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )

      // Image reveal
      const imgTl = gsap.timeline({
        scrollTrigger: { trigger: '.about-portrait', start: 'top 80%', toggleActions: 'play none none none' }
      })
      imgTl.fromTo('.about-img-mask', { scaleX: 1 }, { scaleX: 0, duration: 1, ease: 'power3.inOut' })
        .fromTo('.about-portrait-img', { scale: 1.2 }, { scale: 1, duration: 1, ease: 'power3.out' }, 0)
    }
    init()
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as number[] } },
  }

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">01</span>
          <div className="w-12 h-px bg-gray-200" />
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text side */}
          <div className="about-text-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-tight tracking-tight mb-8 text-black"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Building the web,<br />
              <span className="text-accent">one commit</span><br />
              at a time.
            </motion.h2>

            <div className="space-y-5 text-gray-500 leading-relaxed text-[1.05rem]">
              <p className="about-para opacity-0">
                I&apos;m a Full Stack Developer with {new Date().getFullYear() - 2019}+ years of experience building
                production-grade web applications. My stack spans React.js, Next.js, Node.js, and PHP —
                with a deep appreciation for clean architecture and intuitive UI.
              </p>
              <p className="about-para opacity-0">
                I&apos;ve shipped products for startups and enterprises alike, handling everything from
                database schema design to pixel-level frontend polish. I care deeply about performance,
                accessibility, and the craft of writing maintainable code.
              </p>
              <p className="about-para opacity-0">
                When I&apos;m not coding, I&apos;m exploring new frameworks, contributing to open-source, or
                writing about web development on my blog.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="/resume.pdf"
                download
                className="btn-primary flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium"
              >
                <span>Download CV</span>
                <Download size={14} className="relative z-10" />
              </a>
            </motion.div>
          </div>

          {/* Portrait + stats */}
          <div className="space-y-10">
            {/* Portrait */}
            <div className="about-portrait relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50">
              <div className="about-img-mask absolute inset-0 bg-white z-10 origin-right" />
              <div
                className="about-portrait-img w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                aria-label="Alex Morgan portrait"
              >
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display font-bold text-3xl text-gray-500">AM</span>
                  </div>
                  <p className="text-gray-400 text-sm">Add your photo to</p>
                  <p className="text-gray-400 text-sm font-mono">/public/images/portrait.jpg</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="p-6 border border-gray-100 rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="font-display font-bold text-4xl text-black leading-none mb-1">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        delay={i * 0.15}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 tracking-wide mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { SITE } from '@/lib/data'

const floatingShapes = [
  { size: 320, x: '72%', y: '18%', delay: 0, className: 'float-a' },
  { size: 180, x: '12%', y: '62%', delay: 1.5, className: 'float-b' },
  { size: 100, x: '85%', y: '72%', delay: 0.8, className: 'float-c' },
  { size: 60, x: '30%', y: '20%', delay: 2, className: 'float-a' },
]

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')

      // Staggered headline reveal
      const tl = gsap.timeline({ delay: 1.8 })
      tl.fromTo(
        '.hero-line',
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out' },
      )
        .fromTo(
          '.hero-sub',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.4',
        )
        .fromTo(
          '.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.3',
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2',
        )
    }
    init()
  }, [])

  useEffect(() => {
    // Parallax on mouse move
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e
      const target = currentTarget as HTMLElement
      const cx = target.offsetWidth / 2
      const cy = target.offsetHeight / 2
      const dx = (clientX - cx) / cx
      const dy = (clientY - cy) / cy

      document.querySelectorAll<HTMLElement>('.hero-shape').forEach((s, i) => {
        const factor = (i + 1) * 8
        s.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Floating abstract shapes */}
      {floatingShapes.map((shape, i) => (
        <div
          key={i}
          className={`hero-shape absolute rounded-full transition-transform duration-[1400ms] ease-out pointer-events-none ${shape.className}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background:
              i === 0
                ? 'radial-gradient(circle, rgba(0,82,204,0.06) 0%, transparent 70%)'
                : i === 1
                ? 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0,82,204,0.04) 0%, transparent 70%)',
            border: i < 2 ? '1px solid rgba(0,82,204,0.08)' : 'none',
          }}
        />
      ))}

      {/* Large background letter */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[28vw] font-display font-bold text-gray-50 leading-none select-none pointer-events-none tracking-tighter"
        aria-hidden="true"
      >
        AM
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        {/* Pre-tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-[1px] bg-black" />
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">
            Full Stack Developer
          </span>
          {SITE.availableForWork && (
            <span className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
              Available
            </span>
          )}
        </motion.div>

        {/* Headline */}
        <div ref={textRef} className="overflow-hidden">
          <h1 className="font-display font-bold leading-[0.92] tracking-tight text-black"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            <div className="overflow-hidden">
              <div className="hero-line opacity-0">Crafting digital</div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line opacity-0 text-accent">experiences</div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line opacity-0">that matter.</div>
            </div>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="hero-sub opacity-0 mt-8 text-gray-500 max-w-xl leading-relaxed"
           style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}>
          {SITE.description}
        </p>

        {/* CTAs */}
        <div className="hero-ctas opacity-0 flex flex-wrap items-center gap-4 mt-10">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-4 rounded-full text-sm font-medium tracking-wide"
          >
            <span>View My Work</span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline px-8 py-4 rounded-full text-sm font-medium tracking-wide"
          >
            <span>Get in Touch</span>
          </button>
          <div className="flex items-center gap-4 ml-2">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Location tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="mt-14 text-xs text-gray-300 tracking-widest uppercase"
        >
          Based in {SITE.location}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="hero-scroll opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-gray-400 tracking-widest uppercase"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </button>

      {/* SVG animated line decoration */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        height="1"
        viewBox="0 0 1440 1"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="0" y1="0.5" x2="1440" y2="0.5"
          stroke="#e5e7eb"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </section>
  )
}

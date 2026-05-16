'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const lastScroll = useRef(0)
  const scrollProgress = useRef(0)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const direction = current > lastScroll.current ? 'down' : 'up'

      setScrolled(current > 60)
      setHidden(direction === 'down' && current > 200)

      // Scroll progress
      const total = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = current / total
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${scrollProgress.current})`
      }

      lastScroll.current = current

      // Active section detection
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      sections.forEach((s) => {
        const top = s.offsetTop - 120
        const bottom = top + s.offsetHeight
        if (current >= top && current < bottom) {
          setActiveSection(s.id)
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent',
      )}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Scroll progress bar */}
      <div
        ref={progressBarRef}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black origin-left"
        style={{ transform: 'scaleX(0)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="font-display font-bold text-sm tracking-tight group"
          aria-label="Scroll to top"
        >
          <span className="group-hover:text-accent transition-colors duration-200">SAI PRANEETH REDDY</span>
          {/* <span className="text-gray-300 mx-1"> - </span>
          <span className="text-gray-400 text-xs font-normal tracking-wide">FULL STACK DEVELOPER</span> */}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  'text-xs tracking-widest uppercase font-medium transition-colors duration-200 relative',
                  isActive ? 'text-black' : 'text-gray-400 hover:text-black',
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
          <a
            href="mailto:saipraneethreddy2004@gmail.com"
            className="btn-primary text-xs px-5 py-2.5 rounded-full font-medium tracking-wide"
          >
            <span>Hire Me</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <a href="mailto:saipraneethreddy2004@gmail.com" className="btn-primary text-sm px-5 py-3 rounded-full text-center font-medium mt-2">
                <span>Hire Me</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'
import { SITE } from '@/lib/data'

const socials = [
  { icon: Github, label: 'GitHub', href: SITE.github },
  { icon: Linkedin, label: 'LinkedIn', href: SITE.linkedin },
  { icon: Twitter, label: 'Twitter', href: SITE.twitter },
]

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Animated divider */}
      <div className="overflow-hidden">
        <motion.div
          className="h-px bg-black origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-xl tracking-tight">Alex Morgan</p>
            <p className="text-xs text-gray-400 mt-1 tracking-wide">Full Stack Developer</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-accent transition-colors duration-200 group"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-black transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <span className="tracking-widest uppercase">Top</span>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ArrowUp size={14} />
            </motion.div>
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          <p className="text-xs text-gray-300">
            Built with <span className="text-black">Next.js</span> &amp;{' '}
            <span className="text-black">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

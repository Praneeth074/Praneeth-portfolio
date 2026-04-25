'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir: number) => {
    setDirection(dir)
    setActive((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  useEffect(() => {
    const interval = setInterval(() => go(1), 5000)
    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">05</span>
          <div className="w-12 h-px bg-gray-200" />
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">Testimonials</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold tracking-tight mb-16 text-black"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          What people say
        </motion.h2>

        <div className="relative">
          {/* Main carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-3xl p-10 lg:p-16 max-w-4xl"
              >
                <Quote size={32} className="text-accent/30 mb-8" aria-hidden="true" />

                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light mb-10 tracking-tight">
                  &apos;{TESTIMONIALS[active].quote}&apos;
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-sm text-accent">
                      {TESTIMONIALS[active].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm">{TESTIMONIALS[active].name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{TESTIMONIALS[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2 ml-2" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-black' : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <p className="ml-auto text-xs text-gray-400 font-mono">
              {String(active + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </p>
          </div>
        </div>

        {/* All cards grid – visible on larger screens */}
        <div className="hidden xl:grid grid-cols-4 gap-4 mt-20">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
              className={`testimonial-card text-left p-6 rounded-2xl border transition-all duration-300 ${
                i === active ? 'border-black shadow-lg' : 'border-gray-100 hover:border-gray-200'
              }`}
              whileHover={{ y: -4 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4">
                <span className="font-display font-bold text-xs text-accent">{t.avatar}</span>
              </div>
              <p className="text-xs font-semibold text-black mb-0.5">{t.name}</p>
              <p className="text-xs text-gray-400 mb-3">{t.role}</p>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">&apos;{t.quote}&apos;</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

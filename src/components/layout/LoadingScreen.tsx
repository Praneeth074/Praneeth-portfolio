'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fake progress
    const steps = [20, 45, 70, 88, 100]
    let i = 0
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setVisible(false), 400)
      }
    }, 280)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-8 font-medium">
              Alex Morgan
            </p>
            <div className="w-48 h-[1px] bg-gray-100 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-black transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-300 mt-4 font-mono">{progress}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

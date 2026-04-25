'use client'
import { useEffect, useRef } from 'react'
declare global {
  interface Window {
    __lenis_scroll_y?: number;
  }
}
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import('lenis').default | null>(null)

  useEffect(() => {
    let rafId: number

    async function init() {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      })

      lenisRef.current = lenis

      // Integrate with GSAP ScrollTrigger if available
      lenis.on('scroll', () => {
        (window as typeof window & { __lenis_scroll_y?: number }).__lenis_scroll_y = lenis.scroll
      })

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)
    }

    init()

    return () => {
      cancelAnimationFrame(rafId)
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}

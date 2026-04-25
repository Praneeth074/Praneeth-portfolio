'use client'
import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

type GSAPCallback = (gsap: typeof import('gsap').gsap, scope: HTMLElement) => Promise<(() => void) | void> | (() => void) | void

export function useGSAPAnimation<T extends HTMLElement = HTMLElement>(
  callback: GSAPCallback,
  deps: unknown[] = [],
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    let cleanup: (() => void) | void

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (ref.current) {
        cleanup = await callback(gsap, ref.current)
      }
    }

    init()

    return () => {
      if (cleanup) cleanup()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(options?: {
  y?: number
  duration?: number
  delay?: number
  stagger?: number
  selector?: string
}): RefObject<T> {
  const {
    y = 50,
    duration = 0.9,
    delay = 0,
    stagger = 0.12,
    selector = '.reveal-item',
  } = options ?? {}

  return useGSAPAnimation<T>(async (gsap, scope) => {
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    const items = scope.querySelectorAll(selector)
    if (!items.length) {
      gsap.fromTo(
        scope,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: scope, start: 'top 85%', toggleActions: 'play none none none' },
        },
      )
    } else {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: { trigger: scope, start: 'top 80%', toggleActions: 'play none none none' },
        },
      )
    }
  }, [])
}

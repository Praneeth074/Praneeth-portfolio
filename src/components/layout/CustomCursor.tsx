'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    let mx = 0, my = 0
    let ox = 0, oy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ox = lerp(ox, mx, 0.15)
      oy = lerp(oy, my, 0.15)
      outline.style.left = ox + 'px'
      outline.style.top = oy + 'px'
      rafId = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('mousemove', onMove)

    const interactables = document.querySelectorAll(
      'a, button, [data-cursor="hover"], input, textarea, .skill-chip, .project-card',
    )

    const addHover = () => outline.classList.add('hover')
    const removeHover = () => outline.classList.remove('hover')
    const addClick = () => outline.classList.add('clicking')
    const removeClick = () => outline.classList.remove('clicking')

    interactables.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    window.addEventListener('mousedown', addClick)
    window.addEventListener('mouseup', removeClick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', addClick)
      window.removeEventListener('mouseup', removeClick)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={outlineRef} className="cursor-outline" aria-hidden="true" />
    </>
  )
}

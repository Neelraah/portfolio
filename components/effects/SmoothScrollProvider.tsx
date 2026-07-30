'use client'

import { useEffect, ReactNode } from 'react'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: any

    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not available, fallback to native scroll
        console.log('Smooth scroll not available')
      }
    }

    initLenis()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

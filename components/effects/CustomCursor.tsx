'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springX = useSpring(ringX, { damping: 20, stiffness: 300 })
  const springY = useSpring(ringY, { damping: 20, stiffness: 300 })

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
      ringX.set(e.clientX - 20)
      ringY.set(e.clientY - 20)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, ringX, ringY])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 0 : 8,
          height: isHovering ? 0 : 8,
          backgroundColor: '#00F5FF',
          borderRadius: '50%',
          opacity: isHidden ? 0 : 1,
          boxShadow: '0 0 6px rgba(0,245,255,0.8)',
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: springX,
          y: springY,
          width: isHovering ? 50 : 40,
          height: isHovering ? 50 : 40,
          border: `1px solid ${isHovering ? 'rgba(0,245,255,0.8)' : 'rgba(0,245,255,0.4)'}`,
          borderRadius: '50%',
          opacity: isHidden ? 0 : 1,
          backgroundColor: isHovering ? 'rgba(0,245,255,0.05)' : 'transparent',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Mouse glow trail */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          width: 30,
          height: 30,
          border: '2px solid rgba(0,245,255,0.2)',
          borderRadius: '50%',
          opacity: isHidden ? 0 : 0.3,
          filter: 'blur(2px)',
        }}
      />
    </>
  )
}

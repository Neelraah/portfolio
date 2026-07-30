'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export function AudioController() {
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => setIsMuted(!isMuted)}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full glass-card glow-border-cyan flex items-center justify-center text-cyan-400 hover:text-white transition-colors"
          aria-label={isMuted ? 'Enable ambient audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </motion.button>
      )}
    </AnimatePresence>
  )
}

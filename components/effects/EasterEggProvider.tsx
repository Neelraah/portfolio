'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EasterEggContextType {
  triggerHack: () => void
  isAdminMode: boolean
}

const EasterEggContext = createContext<EasterEggContextType>({
  triggerHack: () => {},
  isAdminMode: false,
})

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [konamiIndex, setKonamiIndex] = useState(0)
  const [showAccessGranted, setShowAccessGranted] = useState(false)
  const [showHack, setShowHack] = useState(false)
  const [isAdminMode, setIsAdminMode] = useState(false)

  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

  const triggerHack = () => {
    setShowHack(true)
    setTimeout(() => setShowHack(false), 5000)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami code
      if (e.key === KONAMI[konamiIndex]) {
        if (konamiIndex === KONAMI.length - 1) {
          setShowAccessGranted(true)
          setIsAdminMode(true)
          setKonamiIndex(0)
          setTimeout(() => setShowAccessGranted(false), 4000)
        } else {
          setKonamiIndex(prev => prev + 1)
        }
      } else {
        setKonamiIndex(0)
      }

      // Track typed text for sudo whoami
      const typedKeys = (e.key).slice(-20)
      if (typedKeys.includes('sudo whoami')) {
        setTimeout(() => {
          alert('> root\n> SYSTEM: Developer Mode Activated\n> Identity: Harleen\n> Clearance: ALPHA\n> Access: GRANTED')
        }, 100)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiIndex])

  return (
    <EasterEggContext.Provider value={{ triggerHack, isAdminMode }}>
      {children}

      {/* KONAMI - Access Granted overlay */}
      <AnimatePresence>
        {showAccessGranted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.95)' }}
          >
            <div className="text-center font-mono">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 10 }}
                className="mb-4"
              >
                <div className="text-6xl mb-4">🔓</div>
                <div className="text-4xl font-bold neon-text-cyan mb-2">ACCESS GRANTED</div>
                <div className="text-xl text-green-400">Welcome, Admin</div>
                <div className="text-sm text-gray-400 mt-4">[ KONAMI CODE DETECTED ]</div>
                <div className="text-xs text-gray-600 mt-2">Easter egg unlocked — you found it!</div>
              </motion.div>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xs text-green-500/30 font-mono"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: [0, 1, 0], y: [0, Math.random() * 400 + 100] }}
                  transition={{ delay: Math.random() * 2, duration: 2, repeat: Infinity }}
                  style={{ left: `${Math.random() * 100}%` }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fake hack animation */}
      <AnimatePresence>
        {showHack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] pointer-events-none"
          >
            <div className="absolute inset-0 border-2 border-red-500/50 animate-pulse" />
            <div className="absolute top-4 left-4 font-mono text-red-400 text-sm">
              <div>⚠ INTRUSION DETECTED</div>
              <div>Deploying countermeasures...</div>
              <div className="mt-2 text-green-400">✓ Threat Neutralized</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </EasterEggContext.Provider>
  )
}

export const useEasterEgg = () => useContext(EasterEggContext)

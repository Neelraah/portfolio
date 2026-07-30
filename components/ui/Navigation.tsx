'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Cyber', href: '#cyber' },
  { label: 'AI', href: '#ai' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

const scrollTo = (href: string) => {
  const el = document.querySelector(href)

  if (el) {
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - 90

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  }

  setMobileOpen(false)
}

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm text-cyan-400 flex items-center gap-2 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal size={16} />
            <span className="neon-text-cyan">H://</span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="font-mono text-xs text-gray-400 hover:text-cyan-400 transition-colors animated-underline tracking-widest uppercase"
              >
                {item.label}
              </button>
            ))}
            <motion.a
              href="mailto:harleenreet2315@gmail.com"
              className="px-4 py-2 rounded-lg font-mono text-xs border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,245,255,0.3)' }}
            >
              TRANSMIT
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(item.href)}
                className="font-mono text-2xl text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

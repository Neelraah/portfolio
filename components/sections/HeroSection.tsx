'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import { ParticleField } from '@/components/three/ParticleField'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { GlobeScene } from '@/components/three/GlobeScene'

const bootSequence = [
  '> Initializing Neural Core...',
  '> Loading Security Layer ████████████ 100%',
  '> Loading AI Modules ████████████ 100%',
  '> Authenticating identity...',
  '> [SUCCESS] Welcome to HARLEEN.OS v2.0',
]

const taglines = [
  'Building Secure Systems.',
  'Training Intelligent Machines.',
  'Turning Ideas Into Products.',
]

export function HeroSection() {
  const [bootLines, setBootLines] = useState<string[]>([])
  const [showHero, setShowHero] = useState(false)
  const [showBoot, setShowBoot] = useState(true)
  const [currentTagline, setCurrentTagline] = useState(0)
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    // console.log("tick", lineIndex);
  let lineIndex = 0;

  const interval = setInterval(() => {
    if (lineIndex >= bootSequence.length) {
      clearInterval(interval);

      setTimeout(() => {
        setShowBoot(false);
        setShowHero(true);
      }, 600);

      return;
    }

    setBootLines((prev) => [...prev, bootSequence[lineIndex]]);
    lineIndex++;
  }, 400);

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    if (!showHero) return
    const interval = setInterval(() => {
      setCurrentTagline(prev => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [showHero])

  // Random glitch
  useEffect(() => {
    if (!showHero) return
    const glitchInterval = setInterval(() => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), 200)
    }, 8000)
    return () => clearInterval(glitchInterval)
  }, [showHero])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" id="hero">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Aurora gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,102,255,0.3) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 80% 80%, rgba(139,92,246,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Three.js particle field */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Boot sequence overlay */}
      <AnimatePresence>
        {showBoot && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-[#050505]"
          >
            <div className="terminal max-w-lg w-full mx-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-xs text-gray-500 font-mono">harleen.os — boot</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 min-h-[200px]">
                {bootLines.map((line, i) => {
                  const safeLine = typeof line === 'string' ? line : ''

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={safeLine.includes('SUCCESS') ? 'text-green-400' : 'text-gray-300'}
                    >
                      {safeLine}
                    </motion.div>
                  )
                })}
                {bootLines.length < bootSequence.length && (
                  <span className="text-cyan-400 blink">█</span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Globe - right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-60">
        <GlobeScene />
      </div>

      {/* Hero content */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-7xl mx-auto px-6 w-full"
          >
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-cyan-400 tracking-widest">SYSTEM ONLINE</span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={`font-display font-bold tracking-[-0.02em] leading-none mb-6 ${glitching ? 'glitch-text' : ''}`}
                data-text="HARLEEN"
                style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
              >
                <span className="text-gradient-aurora">HARLEEN</span>
              </motion.h1>

              {/* Animated tagline */}
              <div className="h-12 mb-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTagline}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-mono text-lg md:text-2xl text-gray-300"
                  >
                    <span className="text-cyan-400">{'> '}</span>
                    {taglines[currentTagline] ?? taglines[0]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Sub info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                {[
                  'B.Tech CSE (Cybersecurity)',
                  'VIT Chennai',
                  'CGPA 9.40',
                  'Startup Founder',
                  'AI Researcher',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md font-mono text-xs text-gray-400 border border-white/10 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <motion.button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 rounded-xl font-mono text-sm font-medium text-white relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,245,255,0.2))',
                    border: '1px solid rgba(0,245,255,0.4)',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">VIEW WORK</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <div className="flex items-center gap-3">
  {[
    { icon: FaGithub, href: "https://github.com/neelraah/", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/harleen-1b9529310/", label: "LinkedIn" },
    { icon: FileText, href: "/portfolio/Harleen_resume.pdf", label: "Resume" },
  ].map(({ icon: Icon, href, label }) => (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
      whileHover={{ scale: 1.1, y: -2 }}
    >
      <Icon size={16} />
    </motion.a>
  ))}
</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="font-mono text-xs tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  )
}

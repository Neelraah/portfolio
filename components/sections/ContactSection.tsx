'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
} from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
const contacts = [
    {
    title: 'Phone',
    value: '+91 7462900157',
    href: 'tel:+917462900157',
    icon: Phone,
  },
  {
    title: 'Email',
    value: 'harleenreet2315@gmail.com',
    href: 'mailto:harleenreet2315@gmail.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    value: 'github.com/neelraah',
    href: 'https://github.com/neelraah',
    icon: FaGithub,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/harleen',
    href: 'https://linkedin.com/in/harleen-1b9529310',
    icon: FaLinkedin,
  },
  {
    title: 'Location',
    value: 'Chennai, India',
    href: '#',
    icon: MapPin,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(0,245,255,.08), transparent 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Let's Build
          <br />
          <span className="text-gradient-aurora">
            Something Amazing.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl leading-8 mb-20"
        >
          Whether it's cybersecurity, AI research, startups, or
          collaborations, I'm always open to discussing exciting ideas
          and impactful projects.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/10 p-8"
          >

            <div className="font-mono text-sm text-green-400 mb-8">
              &gt; connection.initialize()
            </div>

            <div className="space-y-6">

              {contacts.map((item) => {

                const Icon = item.icon

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 8,
                    }}
                    className="flex items-center gap-5 p-5 rounded-xl border border-white/10 hover:border-cyan-400 transition-all"
                  >

                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">

                      <Icon
                        size={22}
                        className="text-cyan-400"
                      />

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        {item.title}
                      </p>

                      <p className="text-white">
                        {item.value}
                      </p>

                    </div>

                  </motion.a>
                )
              })}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/10 p-8"
          >

            <div className="terminal">

              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
              </div>

              <div className="font-mono text-sm mt-6 space-y-3">

                <p className="text-cyan-400">
                  $ connect harleen
                </p>

                <p className="text-gray-300">
                  Initializing secure connection...
                </p>

                <p className="text-green-400">
                  ✓ Identity Verified
                </p>

                <p className="text-green-400">
                  ✓ End-to-End Encryption Enabled
                </p>

                <p className="text-green-400">
                  ✓ Ready for Collaboration
                </p>

                <br />

                <p className="text-white">
                  Available for:
                </p>

                <ul className="space-y-2 text-gray-400">

                  <li>• Cybersecurity Projects</li>

                  <li>• AI Research</li>

                  <li>• Startup Collaborations</li>

                  <li>• Full Stack Development</li>

                  <li>• Open Source</li>

                </ul>

                <motion.div
                  animate={{
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                  }}
                  className="text-cyan-400"
                >
                  █
                </motion.div>

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="mailto:harleenreet2315@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 transition"
              >
                <Send size={18} />
                Email Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-cyan-400 transition"
              >
                <FileText size={18} />
                Resume
              </a>

            </div>

          </motion.div>

        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >

          <p className="text-gray-500 text-sm">
            © 2026 Harleen. Crafted with Next.js, Three.js & Framer Motion.
          </p>

          <p className="font-mono text-cyan-400 text-xs tracking-widest">
            HARLEEN.OS // CONNECTION ACTIVE
          </p>

        </motion.div>

      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      {/* Gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(0,245,255,0.08), transparent 45%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="font-mono text-sm tracking-[0.3em] text-cyan-400 uppercase mb-4"
        >
          About
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
          className="text-5xl md:text-6xl font-bold mb-16 leading-tight"
        >
          Building technology
          <br />
          <span className="text-gradient-aurora">
            that is intelligent & secure.
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <p className="text-lg text-gray-300 leading-9 mb-8">
              I'm a Computer Science student specializing in
              <span className="text-cyan-400">
                {' '}Cybersecurity
              </span>
              {' '}at VIT Chennai. My interests lie at the intersection of
              cybersecurity, artificial intelligence and scalable software
              engineering.
            </p>

            <p className="text-gray-400 leading-9 mb-8">
              Over the past few years, I've worked on AI research, startup
              products, cybersecurity audits, and computer vision systems.
              I enjoy solving complex engineering problems while ensuring
              security remains at the core of every solution.
            </p>

            <p className="text-gray-400 leading-9">
              Beyond academics, I actively contribute to technical communities,
              lead student initiatives, and continuously explore emerging
              technologies in cybersecurity and machine learning.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="space-y-5"
          >

            {[
              ['Education', 'B.Tech CSE (Cybersecurity) · VIT Chennai'],
              ['Current CGPA', '9.40 / 10'],
              ['Research', 'Computer Vision • YOLO • Deep Learning'],
              ['Cybersecurity', 'ISO 27001 • ISMS • Risk Assessment'],
              ['Leadership', 'Vice Chairperson · Hack Club VIT'],
              ['Focus', 'AI • Security • Product Development'],
            ].map(([title, value]) => (
              <motion.div
                key={title}
                whileHover={{
                  x: 8,
                  borderColor: 'rgba(0,245,255,.4)',
                }}
                className="glass-card border border-white/10 rounded-xl px-6 py-5 transition-all"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
                  {title}
                </p>

                <h3 className="text-lg text-gray-200">
                  {value}
                </h3>
              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  )
}
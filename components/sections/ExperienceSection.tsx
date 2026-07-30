'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Rocket,
  Users,
  Calendar,
  ArrowRight,
} from 'lucide-react'

const experiences = [
  {
    title: 'Information Security Intern',
    company: 'Tata Steel UISL',
    period: 'May 2026 - July 2026',
    icon: Shield,
    status: 'COMPLETED',
    description:
      'Worked under the Chief Information Security Officer on Information Security Management System (ISMS) implementation and ISO/IEC 27001:2022 compliance activities.',
    achievements: [
      'Performed ISO 27001 documentation review',
      'Conducted risk assessment and compliance analysis',
      'Prepared ISMS audit documentation',
      'Studied ISO 42001 and AI governance',
    ],
  },
  {
    title: 'Vice Chairperson',
    company: 'Hack Club VIT Chennai',
    period: '2026 - Present',
    icon: Users,
    status: 'ACTIVE',
    description:
      'Leading one of the largest technical communities at VIT Chennai by organizing hackathons, technical workshops, AI events and community initiatives.',
    achievements: [
      'Managed club operations',
      'Organized Prompt Wars with Hack2Skill',
      'Led technical initiatives',
      'Mentored student teams',
    ],
  },
  {
    title: 'Co-Founder & CTO',
    company: 'CarbonCTRL',
    period: '2025 - Present',
    icon: Rocket,
    status: 'ACTIVE',
    description:
      'Co-founded an AI-driven sustainability startup focused on helping businesses optimize their carbon footprint through intelligent decision-making.',
    achievements: [
      'Built AI-powered Carbon Calculator',
      'Developed DQNN optimization engine',
      'Designed full-stack web platform',
      'Published sustainability research',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(0,245,255,.08), transparent 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Career
          <br />
          <span className="text-gradient-aurora">
            Mission Log.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl leading-8 mb-20"
        >
          Every role has strengthened my expertise across cybersecurity,
          artificial intelligence, leadership and product development.
        </motion.p>

        <div className="relative">

          <div className="absolute left-8 top-0 bottom-0 w-px bg-cyan-500/30" />

          <div className="space-y-14">

            {experiences.map((exp, index) => {
              const Icon = exp.icon

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex gap-8"
                >

                  <div className="relative z-10 w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center">

                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />

                  </div>

                  <motion.div
                    whileHover={{
                      y: -8,
                      borderColor: '#00F5FF',
                    }}
                    className="glass-card flex-1 rounded-2xl border border-white/10 p-8"
                  >

                    <div className="flex flex-wrap justify-between items-start gap-4 mb-5">

                      <div>

                        <h3 className="text-3xl font-bold">
                          {exp.title}
                        </h3>

                        <p className="text-cyan-400 mt-1">
                          {exp.company}
                        </p>

                      </div>

                      <div className="text-right">

                        <div className="flex items-center gap-2 justify-end text-gray-400 mb-2">

                          <Calendar size={16} />

                          <span>{exp.period}</span>

                        </div>

                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-xs tracking-wider">

                          {exp.status}

                        </span>

                      </div>

                    </div>

                    <p className="text-gray-400 leading-8 mb-8">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">

                      {exp.achievements.map((item) => (

                        <div
                          key={item}
                          className="flex items-center gap-3 text-gray-300"
                        >

                          <ArrowRight
                            size={18}
                            className="text-cyan-400"
                          />

                          {item}

                        </div>

                      ))}

                    </div>

                  </motion.div>

                </motion.div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import {
  Trophy,
  Award,
  Medal,
  BookOpen,
} from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Research Publication',
    description:
      'Published research on Traffic Density Classification using YOLOv8 for intelligent traffic management.',
  },
  {
    icon: Award,
    title: 'Vice Chairperson',
    description:
      'Leading Hack Club VIT Chennai by organizing technical events, hackathons, and workshops.',
  },
  {
    icon: Medal,
    title: 'Information Security Intern',
    description:
      'Worked at Tata Steel UISL on ISO 27001, ISMS implementation, risk assessment, and security governance.',
  },
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description:
      'Maintaining a CGPA of 9.40 while actively contributing to research, development, and leadership activities.',
  },
]

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(34,211,238,.12), transparent 45%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-cyan-400 mb-4"
        >
          Achievements
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Milestones &
          <br />
          <span className="text-gradient-aurora">
            Accomplishments
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl leading-8 mb-20"
        >
          A journey built through research, leadership, cybersecurity,
          innovation, and continuous learning.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card border border-white/10 rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
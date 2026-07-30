'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Lock,
  FileCheck,
  Network,
  Bug,
  Server,
} from 'lucide-react'

const domains = [
  {
    title: 'Information Security',
    icon: Shield,
    description:
      'Hands-on experience implementing Information Security Management Systems (ISMS) aligned with ISO/IEC 27001:2022.',
    tech: ['ISMS', 'ISO 27001', 'Risk Assessment'],
  },
  {
    title: 'Security Auditing',
    icon: FileCheck,
    description:
      'Performed ISO compliance reviews, control validation, documentation analysis and security audit reporting during my internship.',
    tech: ['Audit', 'Compliance', 'Controls'],
  },
  {
    title: 'Network Security',
    icon: Network,
    description:
      'Strong understanding of network protocols, secure communication, packet analysis and network defense strategies.',
    tech: ['TCP/IP', 'Firewalls', 'Wireshark'],
  },
  {
    title: 'System Security',
    icon: Lock,
    description:
      'Knowledge of authentication, authorization, access control, encryption and secure system design principles.',
    tech: ['IAM', 'Encryption', 'Linux'],
  },
]

const projects = [
  {
    icon: Bug,
    title: 'DNS Honeypot',
    desc: 'Designed a DNS Honeypot capable of detecting malicious DNS queries, logging attacker behavior and identifying reconnaissance attempts.',
  },
  {
    icon: Server,
    title: 'Tata Steel UISL',
    desc: 'Worked on ISMS implementation, ISO 27001 compliance, risk assessment and documentation under the guidance of the CISO.',
  },
]

export function CyberSection() {
  return (
    <section
      id="cybersecurity"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 20%, rgba(0,245,255,.08), transparent 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm"
        >
          Cybersecurity
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Securing
          <br />
          <span className="text-gradient-aurora">
            Digital Infrastructure.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl text-gray-400 leading-8 mb-20"
        >
          My cybersecurity experience spans governance, risk management,
          compliance, network security and defensive security. I focus on
          designing secure systems while ensuring alignment with global
          security standards.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">

          {domains.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  borderColor: '#00F5FF',
                }}
                className="glass-card border border-white/10 rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Icon className="text-cyan-400" size={28} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}

        </div>

        {/* Featured Experience */}

        <div className="mt-28">

          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-px bg-cyan-400" />
            <p className="font-mono uppercase tracking-[0.25em] text-cyan-400 text-sm">
              Security Experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {projects.map((project) => {
              const Icon = project.icon

              return (
                <motion.div
                  key={project.title}
                  whileHover={{
                    y: -8,
                    borderColor: '#00F5FF',
                  }}
                  className="glass-card border border-white/10 rounded-2xl p-8"
                >
                  <Icon
                    size={32}
                    className="text-cyan-400 mb-5"
                  />

                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8">
                    {project.desc}
                  </p>
                </motion.div>
              )
            })}

          </div>

        </div>

        {/* Status Panel */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card border border-cyan-500/20 rounded-2xl mt-20 p-8"
        >
          <div className="font-mono text-green-400 space-y-2 text-sm">

            <p>{'>'} SYSTEM STATUS</p>
            <p>✓ Threat Monitoring Active</p>
            <p>✓ Risk Assessment Complete</p>
            <p>✓ Security Controls Verified</p>
            <p>✓ Compliance Status : ISO 27001 Ready</p>
            <p className="text-cyan-400">
              Awaiting next security challenge...
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
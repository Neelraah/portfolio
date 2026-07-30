'use client'

import { motion } from 'framer-motion'
import {
  Rocket,
  Brain,
  Shield,
  Lock,
  Eye,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'CarbonCTRL',
    subtitle: 'AI Powered Sustainability Platform',
    icon: Rocket,
    status: 'FLAGSHIP',
    color: 'cyan',
    description:
      'An intelligent sustainability platform that helps businesses monitor, optimize and reduce their carbon footprint using AI-driven recommendations and analytics.',
    tech: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Tailwind CSS',
      'Deep Q Neural Network',
      'AI',
    ],
    highlights: [
      'Developed AI-powered carbon optimization engine',
      'Built DQNN for sustainability decision making',
      'Real-time analytics dashboard',
      'Full-stack architecture',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Traffic Density Classification',
    subtitle: 'Computer Vision Research',
    icon: Brain,
    status: 'RESEARCH',
    color: 'purple',
    description:
      'Research project utilizing YOLOv8 for intelligent traffic density estimation with optimized deep learning models and real-time inference.',
    tech: [
      'YOLOv8',
      'Python',
      'OpenCV',
      'TensorFlow',
      'Deep Learning',
    ],
    highlights: [
      '5800+ image dataset',
      'Multiple YOLO models compared',
      'Springer research paper',
      'Real-time detection',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'DNS Honeypot',
    subtitle: 'Cybersecurity',
    icon: Shield,
    status: 'COMPLETED',
    color: 'green',
    description:
      'Designed a DNS Honeypot to detect malicious DNS requests, collect attacker intelligence and analyze reconnaissance attempts.',
    tech: [
      'Python',
      'DNS',
      'Networking',
      'Cybersecurity',
    ],
    highlights: [
      'Threat monitoring',
      'Attack logging',
      'Reconnaissance detection',
      'Network analysis',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'CryptX',
    subtitle: 'Secure Encryption Platform',
    icon: Lock,
    status: 'COMPLETED',
    color: 'orange',
    description:
      'A secure encryption toolkit implementing multiple classical cryptographic algorithms with an intuitive interface.',
    tech: [
      'Java',
      'Cryptography',
      'Security',
    ],
    highlights: [
      'Multiple cipher algorithms',
      'Encryption & Decryption',
      'Educational toolkit',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Seat Occupancy Detection',
    subtitle: 'Computer Vision',
    icon: Eye,
    status: 'COMPLETED',
    color: 'blue',
    description:
      'Computer vision system capable of detecting and monitoring seat occupancy using deep learning and object detection.',
    tech: [
      'YOLO',
      'OpenCV',
      'Python',
    ],
    highlights: [
      'Real-time occupancy detection',
      'High accuracy',
      'Edge deployment ready',
    ],
    github: '#',
    demo: '#',
  },
]

export function ProjectsSection() {
  const featured = projects[0]
  const others = projects.slice(1)

  const FeaturedIcon = featured.icon

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0,245,255,.08), transparent 45%)",
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
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Featured
          <br />
          <span className="text-gradient-aurora">
            Engineering Work.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl leading-8 mb-20"
        >
          A collection of projects spanning artificial intelligence,
          cybersecurity, sustainability, computer vision and full-stack
          development.
        </motion.p>

        {/* ================= FEATURED ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            borderColor: "#00F5FF",
          }}
          className="glass-card rounded-3xl border border-white/10 p-10 mb-14"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <FeaturedIcon
                    size={32}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-xs tracking-widest">
                    {featured.status}
                  </span>

                  <h3 className="text-4xl font-bold mt-3">
                    {featured.title}
                  </h3>

                  <p className="text-cyan-400">
                    {featured.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-8 mb-8">
                {featured.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {featured.highlights.map((item) => (
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

              <div className="flex flex-wrap gap-3 mb-8">
                {featured.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 transition"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href={featured.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400 hover:bg-cyan-500/20 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= OTHER PROJECTS ================= */}

        <div className="grid md:grid-cols-2 gap-8">
          {others.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  borderColor: "#00F5FF",
                }}
                className="glass-card rounded-2xl border border-white/10 p-8"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-cyan-400 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <ArrowRight
                        size={16}
                        className="text-cyan-400"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ================= STATS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20"
        >
          {[
            ["05+", "Projects"],
            ["03", "AI Systems"],
            ["02", "Research"],
            ["01", "Startup"],
            ["100%", "Built"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="glass-card rounded-xl border border-white/10 p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {value}
              </h3>

              <p className="text-gray-400 mt-2">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
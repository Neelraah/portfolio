'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Bot, Eye } from 'lucide-react'

const researchAreas = [
  {
    title: 'Computer Vision',
    icon: Eye,
    tech: [
      'YOLOv8',
      'OpenCV',
      'Object Detection',
      'Image Processing',
    ],
    description:
      'Designed intelligent vision systems for traffic density classification and real-time seat occupancy detection using deep learning and computer vision techniques.',
  },
  {
    title: 'Deep Learning',
    icon: Brain,
    tech: [
      'CNN',
      'TensorFlow',
      'PyTorch',
      'Model Training',
    ],
    description:
      'Built and fine-tuned deep learning models for classification, detection and real-world AI applications with a focus on performance and accuracy.',
  },
  {
    title: 'Reinforcement Learning',
    icon: Cpu,
    tech: [
      'Deep Q Neural Network',
      'Q-Learning',
      'Optimization',
      'Decision Systems',
    ],
    description:
      'Developed a Deep Q Neural Network (DQNN) for CarbonCTRL to optimize sustainability recommendations and intelligent decision-making through reinforcement learning.',
  },
  {
    title: 'AI Systems',
    icon: Bot,
    tech: [
      'LLMs',
      'AI Integration',
      'Automation',
      'Scalable AI',
    ],
    description:
      'Building production-ready AI systems by integrating machine learning models into full-stack applications and intelligent workflows.',
  },
]

export function AISection() {
  return (
    <section
      id="ai"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 50% 10%, rgba(0,245,255,.08), transparent 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4 text-sm"
        >
          AI Research & Intelligent Systems
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Building
          <br />
          <span className="text-gradient-aurora">
            Intelligent Systems.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-3xl leading-8 mb-20"
        >
          My work spans computer vision, deep learning, reinforcement
          learning and intelligent automation. I enjoy building AI systems
          that solve practical engineering problems while remaining
          scalable, efficient and impactful.
        </motion.p>

        {/* Research Areas */}

        <div className="grid md:grid-cols-2 gap-8">

          {researchAreas.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  borderColor: '#00F5FF',
                }}
                className="glass-card border border-white/10 rounded-2xl p-8 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

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

        {/* Featured Work */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28"
        >

          <div className="flex items-center gap-4 mb-12">

            <div className="h-px w-16 bg-cyan-400" />

            <p className="font-mono uppercase tracking-[0.25em] text-cyan-400 text-sm">
              Featured AI Projects
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Project 1 */}

            <motion.div
              whileHover={{
                y: -8,
                borderColor: '#00F5FF',
              }}
              className="glass-card border border-white/10 rounded-2xl p-8"
            >

              <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-3">
                Computer Vision Research
              </p>

              <h3 className="text-3xl font-bold mb-5">
                Traffic Density Classification
              </h3>

              <p className="text-gray-400 leading-8 mb-8">
                Developed a YOLO-based traffic density classifier for
                intelligent transportation systems. The research focused on
                dataset preprocessing, model training, optimization and
                real-time traffic analysis.
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  'YOLOv8',
                  'Computer Vision',
                  'Deep Learning',
                  'OpenCV',
                  'Research',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </motion.div>

            {/* Project 2 */}

            <motion.div
              whileHover={{
                y: -8,
                borderColor: '#00F5FF',
              }}
              className="glass-card border border-white/10 rounded-2xl p-8"
            >

              <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-3">
                Reinforcement Learning
              </p>

              <h3 className="text-3xl font-bold mb-5">
                CarbonCTRL AI Engine
              </h3>

              <p className="text-gray-400 leading-8 mb-8">
                Designed and implemented a Deep Q Neural Network (DQNN)
                capable of learning optimal sustainability decisions for
                CarbonCTRL. The AI engine continuously improves resource
                optimization strategies through reinforcement learning.
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  'Deep Q Neural Network',
                  'Reinforcement Learning',
                  'CarbonCTRL',
                  'Optimization',
                  'AI Decision Engine',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
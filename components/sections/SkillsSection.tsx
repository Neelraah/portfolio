'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Shield,
  Code2,
  Cpu,
  Cloud,
  Monitor,
  Sparkles,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Software Engineering',
    icon: Cpu,
    description:
      'Designing scalable, maintainable and production-ready software systems.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 92 },
      { name: 'Object-Oriented Programming', level: 95 },
      { name: 'System Design', level: 88 },
      { name: 'Design Patterns', level: 85 },
      { name: 'Software Development Life Cycle', level: 92 },
      { name: 'REST API Development', level: 92 },
      { name: 'Authentication & Authorization', level: 90 },
      { name: 'Database Design', level: 90 },
    ],
  },

  {
    title: 'Programming Languages',
    icon: Code2,
    description:
      'Strong foundation across multiple programming paradigms.',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 95 },
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'SQL', level: 95 },
      { name: 'PL/SQL', level: 90 },
      { name: 'R Programming', level: 82 },
    ],
  },

  {
    title: 'Cybersecurity',
    icon: Shield,
    description:
      'Building secure systems using industry standards and offensive security practices.',
    skills: [
      { name: 'Vulnerability Assessment', level: 92 },
      { name: 'Penetration Testing', level: 88 },
      { name: 'OWASP Top 10', level: 92 },
      { name: 'Application Security', level: 90 },
      { name: 'Network Security', level: 90 },
      { name: 'Threat Modeling', level: 84 },
      { name: 'Risk Assessment', level: 95 },
      { name: 'ISO/IEC 27001', level: 95 },
      { name: 'ISMS', level: 95 },
      { name: 'AI Security', level: 86 },
    ],
  },

  {
    title: 'Artificial Intelligence',
    icon: Brain,
    description:
      'Machine learning, computer vision and intelligent automation.',
    skills: [
      { name: 'Machine Learning', level: 92 },
      { name: 'Deep Learning', level: 91 },
      { name: 'Computer Vision', level: 95 },
      { name: 'YOLOv8', level: 95 },
      { name: 'OpenCV', level: 92 },
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 86 },
      { name: 'Deep Q Networks', level: 90 },
      { name: 'Prompt Engineering', level: 92 },
      { name: 'LLM Integration', level: 88 },
    ],
  },

  {
    title: 'Cloud & Backend',
    icon: Cloud,
    description:
      'Backend services, cloud databases and scalable APIs.',
    skills: [
      { name: 'Firebase', level: 94 },
      { name: 'Supabase', level: 90 },
      { name: 'Firestore', level: 92 },
      { name: 'MySQL', level: 92 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'API Integration', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 84 },
    ],
  },

  {
    title: 'Frontend Engineering',
    icon: Monitor,
    description:
      'Creating modern, responsive and high-performance interfaces.',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'Tailwind CSS', level: 97 },
      { name: 'Framer Motion', level: 90 },
      { name: 'Three.js', level: 84 },
      { name: 'Responsive Design', level: 96 },
      { name: 'UI/UX Design', level: 88 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 75% 15%, rgba(0,245,255,.08), transparent 40%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono uppercase tracking-[0.35em] text-cyan-400 text-sm mb-4"
        >
          Technical Expertise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Engineering
          <br />

          <span className="text-gradient-aurora">
            Skill Matrix.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg text-gray-400 leading-8"
        >
          My expertise spans software engineering, cybersecurity,
          artificial intelligence and cloud-native development,
          enabling me to design secure, scalable and intelligent
          systems from the ground up.
        </motion.p>

        {/* ======================== */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {skillCategories.map((category, index) => {

            const Icon = category.icon

            return (

              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  borderColor: '#22d3ee',
                }}
                className="glass-card rounded-3xl border border-white/10 p-8"
              >
                <div className="flex items-center gap-5 mb-6">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                    <Icon
                      className="text-cyan-400"
                      size={30}
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold">
                      {category.title}
                    </h3>

                    <p className="text-gray-400 mt-1">
                      {category.description}
                    </p>

                  </div>

                </div>

                <div className="space-y-5">

                  {category.skills.map((skill) => (

                    <div key={skill.name}>

                      <div className="flex justify-between mb-2">

                        <span className="text-gray-300">
                          {skill.name}
                        </span>

                        <span className="text-cyan-400 font-medium">
                          {skill.level}%
                        </span>

                      </div>

                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400"
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </motion.div>

            )

          })}

        </div>
                {/* ========================================= */}
        {/* TECHNOLOGY ARSENAL */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="flex items-center gap-4 mb-10">
            <Sparkles className="text-cyan-400" size={22} />

            <div>
              <h3 className="text-3xl font-bold">
                Technology Arsenal
              </h3>

              <p className="text-gray-400 mt-2">
                Technologies I use to engineer scalable, secure and
                intelligent software.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-white/10 p-8">

            <div className="grid md:grid-cols-3 gap-10">

              {/* Languages */}

              <div>

                <h4 className="text-cyan-400 font-semibold mb-5">
                  Languages
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Python",
                    "Java",
                    "C++",
                    "JavaScript",
                    "TypeScript",
                    "SQL",
                    "PL/SQL",
                    "R",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>

              {/* Frameworks */}

              <div>

                <h4 className="text-cyan-400 font-semibold mb-5">
                  Frameworks
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "Tailwind",
                    "Framer Motion",
                    "Three.js",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>

              {/* Databases */}

              <div>

                <h4 className="text-cyan-400 font-semibold mb-5">
                  Databases
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "MySQL",
                    "PostgreSQL",
                    "Firebase",
                    "Supabase",
                    "Firestore",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>

            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-12">

              {/* Security */}

              <div>

                <h4 className="text-cyan-400 font-semibold mb-5">
                  Security
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Burp Suite",
                    "OWASP ZAP",
                    "Nmap",
                    "Wireshark",
                    "Metasploit",
                    "OpenVAS",
                    "Kali Linux",
                    "CyberChef",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>

              {/* AI */}

              <div>

                <h4 className="text-cyan-400 font-semibold mb-5">
                  AI / ML
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "TensorFlow",
                    "PyTorch",
                    "OpenCV",
                    "YOLOv8",
                    "NumPy",
                    "Pandas",
                    "Scikit-Learn",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>

              {/* DevOps */}

              <div>

                <h4 className="text-cyan-400 font-semibold mb-5">
                  DevOps & Tools
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Git",
                    "GitHub",
                    "Docker",
                    "Linux",
                    "Postman",
                    "Vercel",
                    "VS Code",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* ========================================= */}
        {/* ENGINEERING PRINCIPLES */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold mb-10">
            Engineering Principles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

            {[
              "Clean Code",
              "SOLID Principles",
              "System Thinking",
              "Security by Design",
              "Scalable Architecture",
              "Performance Optimization",
              "Modular Development",
              "API First Design",
              "Agile Development",
              "Continuous Learning",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  y: -5,
                  borderColor: "#22d3ee",
                }}
                className="glass-card rounded-2xl border border-white/10 p-5 text-center"
              >
                <p className="text-cyan-300 font-medium">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>
                {/* ========================================= */}
        {/* CORE COMPETENCIES */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="flex items-center gap-4 mb-10">
            <Cpu className="text-cyan-400" size={22} />

            <div>
              <h3 className="text-3xl font-bold">
                Core Competencies
              </h3>

              <p className="text-gray-400 mt-2">
                Areas where I enjoy solving complex engineering
                problems.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <motion.div
              whileHover={{
                y: -6,
                borderColor: "#22d3ee",
              }}
              className="glass-card rounded-3xl border border-white/10 p-8"
            >

              <h4 className="text-cyan-400 text-xl font-semibold mb-6">
                What I Build
              </h4>

              <div className="space-y-4">

                {[
                  "AI-powered Applications",
                  "Secure Full Stack Platforms",
                  "Computer Vision Systems",
                  "Cybersecurity Solutions",
                  "RESTful Backend Services",
                  "Cloud-native Applications",
                  "Database-driven Systems",
                  "Automation Tools",
                ].map((item) => (

                  <motion.div
                    key={item}
                    whileHover={{
                      x: 6,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

            <motion.div
              whileHover={{
                y: -6,
                borderColor: "#22d3ee",
              }}
              className="glass-card rounded-3xl border border-white/10 p-8"
            >

              <h4 className="text-cyan-400 text-xl font-semibold mb-6">
                Engineering Focus
              </h4>

              <div className="space-y-4">

                {[
                  "Secure Software Engineering",
                  "Scalable System Design",
                  "AI & Machine Learning",
                  "Cloud Architecture",
                  "Application Security",
                  "Performance Optimization",
                  "Developer Experience",
                  "Research & Innovation",
                ].map((item) => (

                  <motion.div
                    key={item}
                    whileHover={{
                      x: 6,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>
        </motion.div>

        {/* ========================================= */}
        {/* CURRENTLY EXPLORING */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28"
        >

          <h3 className="text-3xl font-bold mb-8">
            Currently Exploring
          </h3>

          <div className="flex flex-wrap gap-4">

            {[
              "Advanced System Design",
              "Microservices",
              "Distributed Systems",
              "AWS",
              "Kubernetes",
              "Redis",
              "Kafka",
              "GraphQL",
              "AI Red Teaming",
              "Agentic AI",
              "Model Security",
              "MCP Servers",
            ].map((tech, index) => (

              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-300"
              >
                {tech}
              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* ========================================= */}
        {/* STATS */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-28"
        >

          {[
            {
              number: "25+",
              label: "Technologies",
            },
            {
              number: "15+",
              label: "Frameworks & Tools",
            },
            {
              number: "5+",
              label: "Major Projects",
            },
            {
              number: "4",
              label: "Domains",
            },
          ].map((item) => (

            <motion.div
              key={item.label}
              whileHover={{
                y: -6,
                borderColor: "#22d3ee",
              }}
              className="glass-card rounded-3xl border border-white/10 p-8 text-center"
            >

              <h2 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  )
}
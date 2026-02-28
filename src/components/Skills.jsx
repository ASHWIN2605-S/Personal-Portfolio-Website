import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    name: 'Frontend',
    icon: '⬡',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'Figma (UI Design)', level: 72 },
    ],
  },
  {
    name: 'Backend',
    icon: '⬢',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Python', level: 84 },
      { name: 'Java', level: 80 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    name: 'Concepts',
    icon: '◈',
    skills: [
      { name: 'OOP (Java / Python)', level: 85 },
      { name: 'DBMS', level: 80 },
      { name: 'Data Structures', level: 72 },
      { name: 'REST APIs', level: 76 },
    ],
  },
  {
    name: 'Tools',
    icon: '◇',
    skills: [
      { name: 'GitHub / Git', level: 86 },
      { name: 'VS Code', level: 92 },
      { name: 'SQL*Plus', level: 75 },
      { name: 'Figma', level: 70 },
    ],
  },
]

function SkillBar({ name, level, darkMode, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className={`font-mono text-sm ${darkMode ? 'text-ink-300' : 'text-ink-700'}`}>{name}</span>
        <span className={`font-mono text-xs ${darkMode ? 'text-ink-500' : 'text-ink-500'}`}>{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${darkMode ? 'bg-ink-800' : 'bg-ink-200'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-ember-500 to-amber-400"
        />
      </div>
    </div>
  )
}

function CategoryCard({ category, darkMode, cardDelay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: cardDelay, ease: [0.22, 1, 0.36, 1] }}
      className={`p-6 rounded-2xl border ${
        darkMode
          ? 'bg-ink-900/60 border-ink-800 hover:border-ink-700'
          : 'bg-white/70 border-ink-200 hover:border-ink-300'
      } transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xl text-ember-500">{category.icon}</span>
        <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
          {category.name}
        </h3>
      </div>
      {category.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          darkMode={darkMode}
          delay={cardDelay + i * 0.08}
        />
      ))}
    </motion.div>
  )
}

export default function Skills({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-28 px-4 relative">
      {/* Section divider accent */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 ${darkMode ? 'bg-gradient-to-b from-transparent via-ink-700 to-transparent' : 'bg-gradient-to-b from-transparent via-ink-300 to-transparent'}`} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className={`font-mono text-xs mb-3 ${darkMode ? 'text-ember-500' : 'text-ember-600'}`}
          >
            02 — Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`section-heading ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}
          >
            Tools of the <span className="text-gradient">trade.</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.name} category={cat} darkMode={darkMode} cardDelay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

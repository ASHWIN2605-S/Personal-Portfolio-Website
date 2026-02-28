import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects, filters } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className={`font-mono text-xs mb-3 ${darkMode ? 'text-ember-500' : 'text-ember-600'}`}
          >
            03 — Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`section-heading mb-4 ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}
          >
            Things I've <span className="text-gradient">built.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-base max-w-md mx-auto ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}
          >
            A selection of projects spanning AI, full-stack web development, and data engineering.
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 rounded-full font-mono text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-ember-500 text-white shadow-lg shadow-ember-500/30'
                  : darkMode
                    ? 'bg-ink-900/60 border border-ink-700 text-ink-400 hover:border-ember-500/50 hover:text-ember-400'
                    : 'bg-white/70 border border-ink-300 text-ink-600 hover:border-ember-500/50 hover:text-ember-600'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.span
                  layoutId="filterBubble"
                  className="absolute inset-0 bg-ember-500 rounded-full -z-10"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} darkMode={darkMode} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

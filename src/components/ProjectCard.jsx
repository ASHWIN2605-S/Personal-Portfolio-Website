import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project, darkMode, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`relative group overflow-hidden rounded-2xl border flex flex-col h-full transition-all duration-300 ${
        darkMode
          ? 'bg-ink-900/70 border-ink-800 hover:border-ember-500/40'
          : 'bg-white/80 border-ink-200 hover:border-ember-500/50'
      }`}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

      <div className="p-6 flex flex-col flex-1 relative">
        <div className="flex items-start justify-between mb-3 gap-2">
          <div className="flex-1">
            {project.featured && (
              <span className={`inline-block font-mono text-xs px-2 py-0.5 rounded mb-2 ${
                darkMode ? 'bg-ember-500/15 text-ember-400 border border-ember-500/25' : 'bg-ember-500/10 text-ember-700 border border-ember-500/30'
              }`}>
                ★ Featured
              </span>
            )}
            <h3 className={`font-display font-bold text-lg leading-tight ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
              {project.title}
            </h3>
          </div>
          <span className={`shrink-0 font-mono text-xs px-2 py-1 rounded-md ${
            darkMode ? 'bg-ink-800 text-ink-400' : 'bg-ink-100 text-ink-600'
          }`}>
            {project.category}
          </span>
        </div>

        <p className={`text-sm leading-relaxed flex-1 mb-5 ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span key={t} className={`tag text-xs px-2 py-0.5 ${darkMode ? '' : 'bg-ember-500/8 text-ember-700 border-ember-500/25'}`}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-dashed border-ink-700/40">
          <a
            href={project.github}
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.github, '_blank', 'noopener,noreferrer')
            }}
            className={`flex items-center gap-1.5 text-sm font-mono cursor-pointer transition-colors ${
              darkMode ? 'text-ink-400 hover:text-ember-400' : 'text-ink-500 hover:text-ember-600'
            }`}
          >
            <FiGithub size={14} />
            Code
          </a>

          {project.live ? (
            <a
              href={project.live}
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.live, '_blank', 'noopener,noreferrer')
              }}
              className={`flex items-center gap-1.5 text-sm font-mono cursor-pointer transition-colors ${
                darkMode ? 'text-ink-400 hover:text-ember-400' : 'text-ink-500 hover:text-ember-600'
              }`}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className={`text-sm font-mono ${darkMode ? 'text-ink-700' : 'text-ink-400'}`}>
              In Progress
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
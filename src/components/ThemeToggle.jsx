import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle({ darkMode, toggleDark }) {
  return (
    <button
      onClick={toggleDark}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ember-500/50 ${
        darkMode ? 'bg-ink-800 border border-ink-700' : 'bg-ink-200 border border-ink-300'
      }`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
          darkMode
            ? 'left-0.5 bg-ink-700 text-amber-300'
            : 'left-7 bg-white text-amber-500 shadow-sm'
        }`}
      >
        {darkMode ? <HiMoon size={13} /> : <HiSun size={13} />}
      </motion.div>
    </button>
  )
}

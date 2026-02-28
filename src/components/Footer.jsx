import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/ASHWIN2605-S', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/s-ashwin-2605s', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:ashwin26s05@gmail.com', label: 'Email' },
]

export default function Footer({ darkMode }) {
  return (
    <footer className={`relative border-t py-10 px-4 ${
      darkMode ? 'border-ink-800/60 bg-ink-950' : 'border-ink-200/60 bg-ink-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className={`font-display font-bold ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
  Ash<span className="text-ember-500">win</span> s
</span>
          </div>

          {/* Copyright */}
          <p className={`font-mono text-xs text-center ${darkMode ? 'text-ink-600' : 'text-ink-400'}`}>
            © {new Date().getFullYear()} Ashwin S. Built with React + Tailwind.
          </p>

          {/* Socials + scroll up */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  darkMode
                    ? 'text-ink-500 hover:text-ember-400 hover:bg-ink-800'
                    : 'text-ink-400 hover:text-ember-600 hover:bg-ink-100'
                }`}
              >
                <Icon size={15} />
              </motion.a>
            ))}

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              aria-label="Scroll to top"
              className={`ml-2 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                darkMode
                  ? 'text-ink-500 hover:text-ember-400 hover:bg-ink-800 border border-ink-800'
                  : 'text-ink-400 hover:text-ember-600 hover:bg-ink-100 border border-ink-300'
              }`}
            >
              <FiArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

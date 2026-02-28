import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Building', href: '#building' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-ink-950/90 backdrop-blur-xl border-b border-ink-800/60 shadow-2xl shadow-black/20'
              : 'bg-ink-50/90 backdrop-blur-xl border-b border-ink-200/60 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 group"
          >
            <span className={`font-display text-lg font-bold ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
  Ash<span className="text-ember-500">win</span> s
</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link font-mono text-sm transition-colors duration-200 ${
                  darkMode
                    ? 'text-ink-400 hover:text-ember-400'
                    : 'text-ink-600 hover:text-ember-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle darkMode={darkMode} toggleDark={toggleDark} />
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode ? 'text-ink-300 hover:text-ember-400 hover:bg-ink-800' : 'text-ink-700 hover:text-ember-600 hover:bg-ink-200'
              }`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-16 left-0 right-0 z-40 border-b ${
              darkMode
                ? 'bg-ink-950/95 backdrop-blur-xl border-ink-800/60'
                : 'bg-ink-50/95 backdrop-blur-xl border-ink-200/60'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg font-mono text-sm transition-all ${
                    darkMode
                      ? 'text-ink-300 hover:text-ember-400 hover:bg-ink-800/60'
                      : 'text-ink-600 hover:text-ember-600 hover:bg-ink-200/60'
                  }`}
                >
                  <span className="text-ember-500 mr-2">→</span>{link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

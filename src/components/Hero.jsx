import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/ASHWIN2605-S', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/s-ashwin-2605s', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:ashwin26s05@gmail.com', label: 'Email' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ darkMode }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-ember-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Floating label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={`mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
          darkMode
            ? 'border-ember-500/30 bg-ember-500/10 text-ember-400'
            : 'border-ember-500/40 bg-ember-500/10 text-ember-700'
        } font-mono text-xs`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available for opportunities
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl"
      >
        {/* Greeting */}
        <motion.p
          variants={item}
          className={`font-mono text-sm mb-4 ${darkMode ? 'text-ink-400' : 'text-ink-500'}`}
        >
          Hello world, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-2"
        >
<span className={darkMode ? 'text-ink-100' : 'text-ink-900'}>Ash</span>
<span className="text-gradient">win</span>
<span className={`inline-block ml-2 ${darkMode ? 'text-ink-700' : 'text-ink-300'}`}>.</span>
<span className={darkMode ? 'text-ink-100' : 'text-ink-900'}> S</span>

        </motion.h1>

        {/* Role */}
        <motion.div variants={item} className="mt-6 mb-8">
          <p className={`font-body text-xl md:text-2xl font-light ${darkMode ? 'text-ink-300' : 'text-ink-600'}`}>
            Full Stack Developer
            <span className={`mx-3 ${darkMode ? 'text-ink-600' : 'text-ink-400'}`}>·</span>
            <span className="text-gradient font-medium">CS Undergrad @ Panimalar</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className={`max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10 ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}
        >
          Computer Science student passionate about building scalable software, secure systems, and solving real-world problems with clean, purposeful code.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="/resume.pdf"
            download
            className="btn-primary shadow-lg shadow-ember-500/20"
          >
            <FiDownload size={16} />
            Download Résumé
          </a>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className={`btn-ghost ${darkMode ? '' : 'border-ink-300 text-ink-700 hover:border-ember-500 hover:text-ember-600'}`}
          >
            View Projects
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex items-center justify-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                darkMode
                  ? 'text-ink-400 hover:text-ember-400 border border-ink-700 hover:border-ember-500/50 bg-ink-900/50'
                  : 'text-ink-500 hover:text-ember-600 border border-ink-300 hover:border-ember-500/50 bg-white/60'
              }`}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer ${
          darkMode ? 'text-ink-600 hover:text-ink-400' : 'text-ink-400 hover:text-ink-600'
        } transition-colors group`}
      >
        <span className="font-mono text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}

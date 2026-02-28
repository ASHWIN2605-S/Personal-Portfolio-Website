import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiZap, FiLock } from 'react-icons/fi'

export default function CurrentlyBuilding({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="building" className="py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className={`font-mono text-xs mb-3 ${darkMode ? 'text-ember-500' : 'text-ember-600'}`}
          >
            04 — Currently Building
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`section-heading ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}
          >
            Work in <span className="text-gradient">progress.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-3xl border p-8 md:p-12 ${
            darkMode
              ? 'bg-gradient-to-br from-ink-900 to-ink-950 border-ink-800'
              : 'bg-gradient-to-br from-white to-ink-50 border-ink-200'
          }`}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ember-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Active Development
              </div>

              <h3 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
                Secure & Serverless<br />
                <span className="text-gradient">P2P Messaging System</span>
              </h3>

              <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
                A decentralized, end-to-end encrypted messaging platform with zero central servers. Messages are routed directly between peers — no data stored, no third-party access, fully private. Building this to solve the fundamental trust problem of centralized chat apps.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Python', 'P2P Sockets', 'E2E Encryption', 'Node.js', 'JavaScript', 'React'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <a
                href="https://github.com/ASHWIN2605-S"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-mono text-sm transition-colors ${
                  darkMode ? 'text-ink-400 hover:text-ember-400' : 'text-ink-500 hover:text-ember-600'
                }`}
              >
                <FiGithub size={15} />
                Follow progress on GitHub
              </a>
            </div>

            {/* Right — build progress */}
            <div className="space-y-3">
              {[
                { phase: 'Architecture Design', detail: 'P2P topology & key exchange planning', done: true },
                { phase: 'Socket Layer', detail: 'Direct peer connection & NAT traversal', done: true },
                { phase: 'Encryption Layer', detail: 'End-to-end AES + RSA key exchange', done: true },
                { phase: 'Message Protocol', detail: 'Routing & delivery confirmation', done: false, active: true },
                { phase: 'React Frontend', detail: 'Chat UI with real-time updates', done: false },
                { phase: 'Testing & Hardening', detail: 'Security audit & edge case testing', done: false },
              ].map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                    step.active
                      ? darkMode
                        ? 'bg-ember-500/10 border border-ember-500/25'
                        : 'bg-ember-500/8 border border-ember-500/30'
                      : darkMode
                        ? 'bg-ink-800/50'
                        : 'bg-ink-100/60'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    step.done
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : step.active
                        ? 'bg-ember-500/20 text-ember-400'
                        : darkMode
                          ? 'bg-ink-700 text-ink-600'
                          : 'bg-ink-200 text-ink-400'
                  }`}>
                    {step.done ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : step.active ? (
                      <FiZap size={10} />
                    ) : (
                      <FiLock size={9} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-mono text-sm font-medium ${
                      step.done
                        ? darkMode ? 'text-ink-300' : 'text-ink-700'
                        : step.active
                          ? 'text-ember-400'
                          : darkMode ? 'text-ink-600' : 'text-ink-400'
                    }`}>
                      {step.phase}
                    </p>
                    <p className={`font-mono text-xs truncate ${darkMode ? 'text-ink-600' : 'text-ink-400'}`}>
                      {step.detail}
                    </p>
                  </div>
                  {step.active && (
                    <span className="font-mono text-xs text-ember-400 bg-ember-500/10 px-2 py-0.5 rounded-full shrink-0">
                      Now
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

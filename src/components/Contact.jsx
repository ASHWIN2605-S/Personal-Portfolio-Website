import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiSend, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi'

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real project, connect to a form service like Formspree / EmailJS
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = `w-full px-4 py-3 rounded-xl font-mono text-sm border outline-none transition-all duration-200 focus:ring-2 focus:ring-ember-500/30 ${
    darkMode
      ? 'bg-ink-900/70 border-ink-700 text-ink-200 placeholder-ink-600 focus:border-ember-500/60'
      : 'bg-white/80 border-ink-300 text-ink-900 placeholder-ink-400 focus:border-ember-500/60'
  }`

  return (
    <section id="contact" className="py-28 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className={`font-mono text-xs mb-3 ${darkMode ? 'text-ember-500' : 'text-ember-600'}`}
          >
            05 — Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`section-heading mb-4 ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}
          >
            Let's <span className="text-gradient">connect.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-base max-w-md mx-auto ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}
          >
            Open to full-time roles, freelance projects, and interesting collaborations. Say hello.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-ink-900/60 border-ink-800' : 'bg-white/80 border-ink-200'
            }`}
          >
            <h3 className={`font-display text-xl font-bold mb-6 ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
              Send a message
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message}
                className="w-full btn-primary justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {sent ? (
                  <><span>✓</span> Message sent!</>
                ) : (
                  <><FiSend size={15} /> Send Message</>
                )}
              </button>
            </div>
          </motion.div>

          {/* Direct contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className={`p-8 rounded-2xl border flex-1 ${
              darkMode ? 'bg-ink-900/60 border-ink-800' : 'bg-white/80 border-ink-200'
            }`}>
              <h3 className={`font-display text-xl font-bold mb-2 ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
                Prefer email?
              </h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
                I check my inbox daily and typically respond within 24 hours.
              </p>
              <a
                href="mailto:ashwin26s05@gmail.com"
                className="btn-primary inline-flex shadow-lg shadow-ember-500/20"
              >
                <FiMail size={16} />
                ashwin26s05@gmail.com
              </a>
            </div>

            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-ink-900/60 border-ink-800' : 'bg-white/80 border-ink-200'
            }`}>
              <h3 className={`font-display text-xl font-bold mb-4 ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
                Elsewhere
              </h3>
              <div className="space-y-3">
                {[
  { icon: FiGithub, label: 'GitHub', handle: '@ASHWIN2605-S', href: 'https://github.com/ASHWIN2605-S' },
  { icon: FiLinkedin, label: 'LinkedIn', handle: 's-ashwin-2605s', href: 'https://www.linkedin.com/in/s-ashwin-2605s' },
  { icon: FiPhone, label: 'Phone', handle: '+91 7845522605', href: 'tel:+917845522605' },
].map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      darkMode
                        ? 'hover:bg-ink-800 text-ink-400 hover:text-ember-400'
                        : 'hover:bg-ink-100 text-ink-600 hover:text-ember-600'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      darkMode ? 'bg-ink-800 text-ink-300' : 'bg-ink-100 text-ink-700'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className={`font-mono text-xs ${darkMode ? 'text-ink-600' : 'text-ink-400'}`}>{label}</p>
                      <p className={`font-mono text-sm font-medium ${darkMode ? 'text-ink-300' : 'text-ink-700'}`}>{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiServer, FiDatabase, FiLock } from 'react-icons/fi'

const interests = [
  { icon: FiCode, label: 'Web Development', desc: 'React, Node.js & modern full-stack architectures' },
  { icon: FiServer, label: 'Backend Systems', desc: 'Scalable APIs, REST services & server-side logic' },
  { icon: FiDatabase, label: 'Database Design', desc: 'MySQL, DBMS concepts & data modelling' },
  { icon: FiLock, label: 'Secure Systems', desc: 'P2P encryption, serverless & privacy-first design' },
]

const timeline = [
  {
    year: '2023–2027',
    title: 'B.E. Computer Science',
    place: 'Panimalar Engineering College',
    detail: 'CGPA: 7.97',
    type: 'edu',
  },
  {
    year: 'May 2023',
    title: '12th Standard',
    place: 'Sivanthi Mat. Hr. Sec. School',
    detail: '64.1%',
    type: 'edu',
  },
  {
    year: 'May–Jun 2025',
    title: 'Full Stack Developer Intern',
    place: 'Novi Tech',
    detail: '1 month internship',
    type: 'work',
  },
  {
    year: 'Jun 2025',
    title: 'Web Development Intern',
    place: 'Code Bind Technogo',
    detail: '2.5 weeks',
    type: 'work',
  },
  {
    year: 'Jun–Jul 2024',
    title: 'Python Trainee',
    place: 'Dream Code',
    detail: '3 weeks training',
    type: 'work',
  },
]

function InterestCard({ icon: Icon, label, desc, darkMode, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`p-5 rounded-xl border transition-all duration-300 group ${
        darkMode
          ? 'bg-ink-900/50 border-ink-800 hover:border-ember-500/40 hover:bg-ink-900'
          : 'bg-white/70 border-ink-200 hover:border-ember-500/40 hover:bg-white'
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
        darkMode ? 'bg-ember-500/10 text-ember-400 group-hover:bg-ember-500/20' : 'bg-ember-500/10 text-ember-600 group-hover:bg-ember-500/20'
      }`}>
        <Icon size={20} />
      </div>
      <h4 className={`font-display text-sm font-semibold mb-1 ${darkMode ? 'text-ink-200' : 'text-ink-800'}`}>{label}</h4>
      <p className={`text-xs leading-relaxed ${darkMode ? 'text-ink-500' : 'text-ink-500'}`}>{desc}</p>
    </motion.div>
  )
}

export default function About({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Top: bio + interest cards */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={`font-mono text-xs mb-3 ${darkMode ? 'text-ember-500' : 'text-ember-600'}`}
            >
              01 — About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`section-heading mb-6 ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}
            >
              Crafting software<br />
              <span className="text-gradient">with purpose.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p className={`text-base leading-relaxed ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
                I'm <span className={`font-semibold ${darkMode ? 'text-ink-200' : 'text-ink-800'}`}>Ashwin S</span>, a Computer Science Engineering student at Panimalar Engineering College (2023–2027), passionate about building reliable and scalable software from the ground up.
              </p>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
                My stack spans <span className={`font-medium ${darkMode ? 'text-ink-200' : 'text-ink-800'}`}>Java, Python, React, Node.js</span> and MySQL. I've completed three internships as a Full Stack Developer, Web Developer, and Python Trainee — gaining practical exposure across the full software lifecycle.
              </p>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
                Actively seeking a software development internship where I can contribute to real-world projects, deepen my engineering skills, and grow within a strong team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 mt-8"
            >
              {[['7.97', 'CGPA'], ['3', 'Internships'], ['2+', 'Years coding']].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-3xl font-bold text-gradient">{num}</p>
                  <p className={`font-mono text-xs mt-0.5 ${darkMode ? 'text-ink-500' : 'text-ink-500'}`}>{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interest cards */}
          <div className="grid grid-cols-2 gap-4">
            {interests.map((item, i) => (
              <InterestCard key={item.label} {...item} darkMode={darkMode} i={i} />
            ))}
          </div>
        </div>

        {/* Education & Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`font-display text-2xl font-bold mb-8 ${darkMode ? 'text-ink-200' : 'text-ink-800'}`}>
            Education &amp; Experience
          </h3>
          <div className={`relative pl-6 border-l-2 border-dashed space-y-5 ${darkMode ? 'border-ink-700' : 'border-ink-300'}`}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                {/* Dot */}
                <div className={`absolute -left-[25px] top-2 w-3 h-3 rounded-full border-2 ${
                  item.type === 'work'
                    ? 'bg-ember-500 border-ember-400'
                    : darkMode ? 'bg-ink-800 border-ink-500' : 'bg-white border-ink-400'
                }`} />

                <div className={`p-4 rounded-xl border transition-all duration-200 ${
                  darkMode
                    ? 'bg-ink-900/50 border-ink-800 hover:border-ink-700'
                    : 'bg-white/70 border-ink-200 hover:border-ink-300'
                }`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className={`font-display font-semibold text-base ${darkMode ? 'text-ink-100' : 'text-ink-900'}`}>
                        {item.title}
                      </p>
                      <p className={`font-mono text-sm mt-0.5 ${darkMode ? 'text-ink-400' : 'text-ink-600'}`}>
                        {item.place}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`font-mono text-xs px-2 py-1 rounded ${
                        item.type === 'work'
                          ? darkMode ? 'bg-ember-500/10 text-ember-400' : 'bg-ember-500/10 text-ember-700'
                          : darkMode ? 'bg-ink-800 text-ink-400' : 'bg-ink-100 text-ink-600'
                      }`}>
                        {item.year}
                      </span>
                      <p className={`font-mono text-xs mt-1 ${darkMode ? 'text-ink-600' : 'text-ink-400'}`}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

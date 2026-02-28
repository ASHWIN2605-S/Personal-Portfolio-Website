import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDark = () => setDarkMode(prev => !prev)

  return (
    <div className={`min-h-screen font-body transition-colors duration-300 ${darkMode ? 'bg-ink-950 text-ink-100' : 'bg-ink-50 text-ink-900'}`}>
      {/* Subtle grid background */}
      <div className={`fixed inset-0 bg-grid-pattern bg-grid pointer-events-none ${darkMode ? 'opacity-100' : 'opacity-30'}`} />
      
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ember-500/5 rounded-full blur-3xl pointer-events-none" />

      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <CurrentlyBuilding darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  )
}

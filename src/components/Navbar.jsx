import { useEffect, useState } from 'react'
import { SparklesText } from './ui/sparkles-text'

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    theme === 'dark'
      ? root.classList.add('dark')
      : root.classList.remove('dark')

    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
  }, [theme])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-slate-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm backdrop-blur">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center w-full">

          {/* Logo */}
          <div className="flex items-center">
            <img src="/letter-m.png" alt="Logo" className="h-8 w-8 mr-2" />
            <a href="#" className="text-xl font-semibold text-gray-900 dark:text-white">
              <SparklesText className="text-md">Meghana Poojary</SparklesText>
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-end flex-1 gap-3">

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                ☰
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <a
                    href="#projects"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover-bg-gray-700"
                  >
                    Skills
                  </a>
                  <a
                    href="#experience"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Experience
                  </a>
                  <a
                    href="#contact"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Contact Me
                  </a>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM15.657 4.343a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 15.657a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 15.657a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM3 9a1 1 0 110 2H2a1 1 0 110-2h1zM4.343 4.343a1 1 0 011.414 0l.707.707A1 1 0 116.05 6.464l-.707-.707a1 1 0 01-1.414-1.414zM10 5a5 5 0 100 10A5 5 0 0010 5z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

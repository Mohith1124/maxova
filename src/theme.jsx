import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const STORAGE_KEY = 'Maxova-theme'

function resolve(mode) {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return mode
}

export function ThemeProvider({ children }) {
  // mode is what the user chose: 'light' | 'dark' | 'system'
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'system'
    } catch {
      return 'system'
    }
  })

  // Apply the resolved theme to <html> and remember the choice.
  useEffect(() => {
    const apply = () => document.documentElement.setAttribute('data-theme', resolve(mode))
    apply()
    try {
      localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      /* ignore */
    }
    // If following the system, react to OS changes live.
    if (mode === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', apply)
      return () => mq.removeEventListener('change', apply)
    }
  }, [mode])

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

// Small segmented control: Light / System / Dark
export function ThemeToggle() {
  const { mode, setMode } = useTheme()
  const options = [
    { key: 'light', label: 'Light' },
    { key: 'system', label: 'Auto' },
    { key: 'dark', label: 'Dark' },
  ]
  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      {options.map((o) => (
        <button
          key={o.key}
          className={'tt-btn' + (mode === o.key ? ' active' : '')}
          onClick={() => setMode(o.key)}
          aria-pressed={mode === o.key}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

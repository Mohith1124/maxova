import { BRAND } from '../config'
import { ThemeToggle } from '../theme.jsx'

export default function Nav() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Maxova">
          <svg width="130" height="34" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="nav-logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#FF5C39"/>
                <stop offset="48%"  stopColor="#6C3BFF"/>
                <stop offset="100%" stopColor="#2E9BFF"/>
              </linearGradient>
            </defs>
            <text x="0" y="80"
                  fontFamily="system-ui,-apple-system,'Arial Black',Arial,sans-serif"
                  fontWeight="900" fontSize="88" letterSpacing="-2"
                  fill="url(#nav-logo-grad)">Maxova</text>
          </svg>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="nav-right">
          <ThemeToggle />
          <a className="btn btn-grad" href="#start">Start a project</a>
        </div>
      </div>
    </header>
  )
}
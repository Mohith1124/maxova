import { BRAND } from '../config'
import { ThemeToggle } from '../theme.jsx'

export default function Nav() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Maxova">
          <svg width="148" height="39" viewBox="0 0 380 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="nav-badge-g" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#FF5C39"/>
                <stop offset="100%" stopColor="#6C3BFF"/>
              </linearGradient>
              <linearGradient id="nav-ova-g" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#FF5C39"/>
                <stop offset="100%" stopColor="#6C3BFF"/>
              </linearGradient>
            </defs>
            <rect x="0" y="5" width="90" height="90" rx="22" fill="url(#nav-badge-g)"/>
            <path d="M 17 80 L 17 22 L 45 56 L 73 22 L 73 80"
                  stroke="white" strokeWidth="8"
                  strokeLinejoin="round" strokeLinecap="round" fill="none"/>
            <text fontFamily="system-ui,-apple-system,'Arial Black',Arial,sans-serif"
                  fontWeight="900" fontSize="70" letterSpacing="-1.5">
              <tspan x="108" y="74" fill="currentColor">Max</tspan><tspan fill="url(#nav-ova-g)">ova</tspan>
            </text>
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
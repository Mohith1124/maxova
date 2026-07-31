import { BRAND } from '../config'
import { ThemeToggle } from '../theme.jsx'

export default function Nav() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Maxova">
          <svg width="168" height="32" viewBox="0 0 520 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="nav-logo-grad" x1="5" y1="5" x2="95" y2="95" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#FF5C39"/>
                <stop offset="50%"  stopColor="#6C3BFF"/>
                <stop offset="100%" stopColor="#2E9BFF"/>
              </linearGradient>
            </defs>
            <path d="M 5 95 L 28 5 L 50 42 L 72 5 L 95 95"
                  stroke="url(#nav-logo-grad)" strokeWidth="9"
                  strokeLinejoin="round" strokeLinecap="round" fill="none"/>
            <line x1="114" y1="14" x2="114" y2="86" stroke="#2a2535" strokeWidth="1.5"/>
            <text x="126" y="78"
                  fontFamily="system-ui,-apple-system,'Arial Black',Arial,sans-serif"
                  fontWeight="800" fontSize="76" letterSpacing="-1.5"
                  fill="currentColor">axova</text>
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
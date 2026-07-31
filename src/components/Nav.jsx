import { BRAND } from '../config'
import { ThemeToggle } from '../theme.jsx'

export default function Nav() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="Maxova">
          <svg width="155" height="38" viewBox="0 0 450 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="nav-chev-g" x1="36" y1="8" x2="72" y2="102" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#FF5C39"/>
                <stop offset="50%"  stopColor="#6C3BFF"/>
                <stop offset="100%" stopColor="#2E9BFF"/>
              </linearGradient>
            </defs>
            <path d="M 10 8 L 46 55 L 10 102"
                  stroke="#FF5C39" strokeWidth="9"
                  strokeLinecap="round" strokeLinejoin="round"
                  fill="none" opacity="0.5"/>
            <path d="M 36 8 L 72 55 L 36 102"
                  stroke="url(#nav-chev-g)" strokeWidth="9"
                  strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <text x="90" y="72"
                  fontFamily="system-ui,-apple-system,'Arial Black',Arial,sans-serif"
                  fontWeight="900" fontSize="62" letterSpacing="-1.5"
                  fill="currentColor">Maxova</text>
            <text x="91" y="96"
                  fontFamily="system-ui,-apple-system,Arial,sans-serif"
                  fontWeight="500" fontSize="12" letterSpacing="2.8"
                  fill="#6C3BFF">WEBSITES THAT MOVE</text>
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
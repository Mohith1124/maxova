import { BRAND } from '../config'
import { ThemeToggle } from '../theme.jsx'

export default function Nav() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top">
          {BRAND.name.slice(0, -3)}
          <b>{BRAND.name.slice(-3)}</b>
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
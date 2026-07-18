import { BRAND } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap foot">
        <a className="brand" href="#top">
          {BRAND.name.slice(0, -3)}
          <b>{BRAND.name.slice(-3)}</b>
        </a>
        <div className="foot-links">
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href={'https://wa.me/' + BRAND.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={'mailto:' + BRAND.email}>Email</a>
        </div>
        <div>© {year} {BRAND.name}</div>
      </div>
    </footer>
  )
}
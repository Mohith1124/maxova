import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './useReveal.js'

// Soft glow that follows the pointer on desktop.
function useCursorGlow() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduce || coarse) return

    const glow = document.createElement('div')
    glow.className = 'glow'
    document.body.appendChild(glow)

    let tx = window.innerWidth / 2, ty = window.innerHeight * 0.3, cx = tx, cy = ty, raf
    const onMove = (e) => { tx = e.clientX; ty = e.clientY }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      glow.style.left = cx + 'px'
      glow.style.top = cy + 'px'
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      glow.remove()
    }
  }, [])
}

export default function App() {
  useReveal()
  useCursorGlow()

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="b1" />
        <span className="b2" />
        <span className="b3" />
      </div>
      <div className="grid-fade" aria-hidden="true" />

      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Process />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
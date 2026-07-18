import HeroShapes from './HeroShapes.jsx'

import { BRAND } from '../config'

const HEADLINE = ['Websites', 'that', 'move', 'people.']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="flux-orb" aria-hidden="true" />
      <HeroShapes />
      <div className="wrap">
        <div className="status">
          <span className="pulse" /> Available for new projects
        </div>
        <h1 className="hero-title">
          {HEADLINE.map((w, i) => (
            <span
              key={i}
              className={'word' + (w === 'move' ? ' grad' : '')}
              style={{ animationDelay: 0.15 + i * 0.12 + 's' }}
            >
              {w}
            </span>
          ))}
        </h1>
        <p className="lead">
          I'm Mohith - a full-stack web developer. I build fast, beautiful websites that make
          businesses look world-class online.
        </p>
        <div className="hero-cta">
          <a className="btn btn-grad" href="#start">Start a project</a>
          <a className="btn btn-line" href="#work">See my work</a>
        </div>
        <div className="scroll-ind">
          <span className="mouse" />
          scroll
        </div>
      </div>
    </section>
  )
}

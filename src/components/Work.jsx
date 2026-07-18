import { PROJECTS } from '../config'

function tilt(e) {
  const card = e.currentTarget
  const r = card.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  card.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`
}
function reset(e) {
  e.currentTarget.style.transform = ''
}

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">work</span>
          <div className="sec-head">
            <h2>Things I've built</h2>
            <p>Real projects, live on the internet - not mock-ups.</p>
          </div>
        </div>
        <div className="proj">
          {PROJECTS.map((p) => (
            <div className="pcard reveal" key={p.num} onMouseMove={tilt} onMouseLeave={reset}>
              <div className="pnum">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="ptags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {p.link && (
                <a className="plink" href={p.link} target="_blank" rel="noopener noreferrer">
                  View live site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17 17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

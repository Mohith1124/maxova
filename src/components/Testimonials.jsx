import { TESTIMONIALS } from '../config'

function Stars({ n = 5 }) {
  return (
    <div className="stars" aria-label={n + ' out of 5 stars'}>
      {'★'.repeat(n)}
    </div>
  )
}

export default function Testimonials() {
  // Auto-hide the whole section if there are no testimonials yet.
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null

  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">testimonials</span>
          <div className="sec-head">
            <h2>What clients say</h2>
            <p>Real words from the businesses I've worked with.</p>
          </div>
        </div>
        <div className="tgrid">
          {TESTIMONIALS.map((t, i) => (
            <div className="tcard reveal" key={i}>
              <Stars n={t.rating || 5} />
              <p className="quote">“{t.quote}”</p>
              <div className="who">
                <b>{t.name}</b>
                <span>{t.business}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
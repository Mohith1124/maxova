import { STEPS } from '../config'

// If a step has linkText, turn that word into a link (with animated underline).
function withLink(s) {
  if (!s.linkText) return s.desc
  const idx = s.desc.indexOf(s.linkText)
  if (idx === -1) return s.desc
  const before = s.desc.slice(0, idx)
  const after = s.desc.slice(idx + s.linkText.length)
  return (
    <>
      {before}
      <a className="inline-link" href={s.linkHref || '#start'}>{s.linkText}</a>
      {after}
    </>
  )
}

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">process</span>
          <div className="sec-head">
            <h2>How working together works</h2>
            <p>Clear and simple from first message to launch day.</p>
          </div>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.n}>
              <div className="sn">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{withLink(s)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
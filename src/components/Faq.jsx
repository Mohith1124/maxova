import { useState } from 'react'
import { FAQS } from '../config'

export default function Faq() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">faq</span>
          <div className="sec-head">
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know before we get started.</p>
          </div>
        </div>
        <ul className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <li className="faq-item reveal" key={i}>
                <button
                  className="faq-q"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: isOpen ? '400px' : '0' }}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

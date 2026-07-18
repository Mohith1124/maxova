import { PLANS } from '../config'

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">pricing</span>
          <div className="sec-head">
            <h2>Straightforward pricing</h2>
            <p>Pick a starting point - final scope and price are confirmed in your agreement. One-time prices.</p>
          </div>
        </div>
        <div className="plans">
          {PLANS.map((plan) => (
            <div className={'plan reveal' + (plan.featured ? ' feat' : '')} key={plan.name}>
              <div className="pname">{plan.name}</div>
              <div className="price-wrap">
              <span className="price-hint">Hover to reveal</span>
              <div className="price">{plan.price}</div>
             </div>
              <div className="pdesc">{plan.desc}</div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <a className={'btn ' + (plan.featured ? 'btn-grad' : 'btn-line')} href="#start">
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

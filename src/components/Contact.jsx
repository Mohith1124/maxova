import { useState } from 'react'
import { BRAND } from '../config'

const EMPTY = { name: '', phone: '', biz: '', type: '', domain: '', plan: 'Not sure yet', msg: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const send = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.msg.trim()) {
      alert('Please fill in your name, phone number, and what you need.')
      return
    }
    const lines = [
      'New website enquiry',
      '',
      'Name: ' + form.name,
      'Phone: ' + form.phone,
      'Business: ' + (form.biz || '-'),
      'Type: ' + (form.type || '-'),
      'Existing site: ' + (form.domain || '-'),
      'Plan: ' + form.plan,
      'Needs: ' + form.msg,
    ]
    const url = 'https://wa.me/' + BRAND.whatsapp + '?text=' + encodeURIComponent(lines.join('\n'))
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section id="start">
      <div className="wrap contact-grid">
        <div className="contact-left reveal">
          <span className="eyebrow">start a project</span>
          <h2>Tell me about your <span className="grad">project</span></h2>
          <p>Fill this in and I'll get back to you with a plan and a timeline. No obligation - it just starts the conversation.</p>
          <div className="direct">
            <a href="https://cal.id/mohith-morees/free-consultation" target="_blank" rel="noopener noreferrer">
              <span className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="17" rx="2" stroke="var(--a2)" strokeWidth="2"/>
                  <path d="M3 9h18" stroke="var(--a2)" strokeWidth="2"/>
                  <path d="M8 2v4M16 2v4" stroke="var(--a2)" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="7" y="13" width="3" height="3" rx="0.5" fill="var(--a2)"/>
                </svg>
              </span>
              Book a free call
            </a>
            <a href={'https://wa.me/' + BRAND.whatsapp} target="_blank" rel="noopener noreferrer">
              <span className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.85-1.45A10 10 0 1 0 12 2z" /></svg>
              </span>
              Chat on WhatsApp
            </a>
            <a href={'mailto:' + BRAND.email}>
              <span className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" /></svg>
              </span>
              {BRAND.email}
            </a>
          </div>
        </div>

        <div className="formcard reveal">
          <div className="fgrid">
            <div className="field">
              <label>Your name <span className="req">*</span></label>
              <input type="text" value={form.name} onChange={set('name')} placeholder="Mohith Morees" />
            </div>
            <div className="field">
              <label>Phone / WhatsApp <span className="req">*</span></label>
              <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 8247894749" />
            </div>
          </div>
          <div className="fgrid">
            <div className="field">
              <label>Business name</label>
              <input type="text" value={form.biz} onChange={set('biz')} placeholder="Mohith Clinic" />
            </div>
            <div className="field">
              <label>Business type</label>
              <input type="text" value={form.type} onChange={set('type')} placeholder="Clinic, salon, shop..." />
            </div>
          </div>
          <div className="fgrid">
            <div className="field">
              <label>Existing website / domain</label>
              <input type="text" value={form.domain} onChange={set('domain')} placeholder="None yet, or yoursite.com" />
            </div>
            <div className="field">
              <label>Plan you're interested in</label>
              <select value={form.plan} onChange={set('plan')}>
                <option>Not sure yet</option>
                <option>Basic - ₹5,999</option>
                <option>Standard - ₹10,999</option>
                <option>Pro - ₹16,999+</option>
              </select>
            </div>
          </div>
          <div className="field full">
            <label>What do you need? <span className="req">*</span></label>
            <textarea value={form.msg} onChange={set('msg')} placeholder="Tell me about your business and what you want the website to do." />
          </div>
          <button className="btn btn-grad submit-btn" onClick={send}>
            Send enquiry
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="form-note">Your details go straight to my WhatsApp. I usually reply within a day.</div>
        </div>
      </div>
    </section>
  )
}
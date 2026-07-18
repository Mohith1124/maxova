import { SKILLS } from '../config'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about reveal">
          <span className="eyebrow">about</span>
          <h2>A developer who ships real, working products.</h2>
          <p>
            I hold a <b>B.Tech in Computer Science</b> and build full-stack web applications end to
            end - from design to database to deployment. I've shipped a live production marketplace
            with user accounts, online payments and image handling, so I handle the hard parts, not
            just landing pages.
          </p>
          <p>
            Work with me and you get one person who owns the whole build, communicates clearly, and
            delivers on an agreed timeline. No agency runaround.
          </p>
        </div>
        <div className="skills reveal">
          <h3># tech I build with</h3>
          <div className="skill-row">
            {SKILLS.build.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
          <h3># tools &amp; services</h3>
          <div className="skill-row">
            {SKILLS.tools.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
          <h3># what that means for you</h3>
          <div className="skill-row">
            {SKILLS.outcomes.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

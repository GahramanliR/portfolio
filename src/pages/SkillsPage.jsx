import SectionHeader from '../components/SectionHeader'
import SkillBar from '../components/SkillBar'
import { socialSkills, technicalSkills, volunteering } from '../data/site'

export default function SkillsPage() {
  return (
    <section className="page">
      <SectionHeader index="02" title="Skills" kicker="Technical and social" />

      <div className="two-col">
        <div>
          <p className="block-label">Technical</p>
          <div className="stack">
            {technicalSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        <div>
          <p className="block-label">Social</p>
          <div className="pill-grid">
            {socialSkills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>

          <p className="block-label" style={{ marginTop: 32 }}>
            Volunteering
          </p>
          <div className="timeline">
            {volunteering.map((item) => (
              <article key={`${item.year}-${item.org}`} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <div>
                  <h2 className="timeline__title">{item.role}</h2>
                  <p className="timeline__text">{item.org}</p>
                </div>
                <p className="timeline__place">{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

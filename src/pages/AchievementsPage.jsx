import SectionHeader from '../components/SectionHeader'
import { achievements } from '../data/site'

export default function AchievementsPage() {
  return (
    <section className="page">
      <SectionHeader index="03" title="Achievements" />
      <div className="list">
        {achievements.map((item) => (
          <article key={`${item.year}-${item.title}`} className="list__row">
            <span className="list__year">{item.year}</span>
            <div>
              <h2 className="list__title">{item.title}</h2>
              <p className="list__sub">{item.category}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

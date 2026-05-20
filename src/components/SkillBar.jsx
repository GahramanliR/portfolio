export default function SkillBar({ name, years, level }) {
  return (
    <div className="skill">
      <div className="skill__row">
        <span className="skill__name">{name}</span>
        <span className="skill__years">{years}</span>
      </div>
      <div className="skill__track" aria-hidden="true">
        <div className="skill__fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

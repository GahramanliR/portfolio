export default function SectionHeader({ index, title, kicker }) {
  return (
    <header className="section-header">
      <div>
        <p className="section-header__kicker">{kicker}</p>
        <h1 className="section-header__title">{title}</h1>
      </div>
      <span className="section-header__index">{index}</span>
    </header>
  )
}

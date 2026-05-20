import SectionHeader from '../components/SectionHeader'

export default function ResumePage() {
  return (
    <section className="page page--center">
      <SectionHeader index="05" title="Resume" />
      <p className="center-copy">
        Download the latest PDF version of my resume.
      </p>
      <a className="button button--accent" href="/resume.pdf" download>
        Download resume
      </a>
    </section>
  )
}

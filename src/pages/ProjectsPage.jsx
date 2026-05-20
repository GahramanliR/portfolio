import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/site'

export default function ProjectsPage() {
  return (
    <section className="page">
      <SectionHeader index="04" title="Projects"/>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

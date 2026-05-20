import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
    >
      <div className="project-card__top">
        <h2 className="project-card__title">{project.name}</h2>
        <span className="project-card__arrow">↗</span>
      </div>
      <p className="project-card__summary">{project.summary}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  )
}

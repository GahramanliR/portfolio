import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profile } from '../data/site'

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        portfolio / 2026
      </motion.p>

      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.03 }}
      >
        {profile.name}
      </motion.h1>

      <motion.p
        className="hero__subtitle"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
      >
        {profile.tagline}
      </motion.p>

      <motion.p
        className="hero__body"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
      >
        {profile.bio}
      </motion.p>

      <motion.div
        className="hero__links"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
      >
        <a className="button" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="button button--soft" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </motion.div>

      <div className="hero__foot">
        <span>{profile.location}</span>
        <span>backend / cp / systems</span>
      </div>
    </section>
  )
}

import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import AchievementsPage from './pages/AchievementsPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import BlogIndexPage from './pages/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><HomePage /></Page>} />
          <Route path="/skills" element={<Page><SkillsPage /></Page>} />
          <Route path="/achievements" element={<Page><AchievementsPage /></Page>} />
          <Route path="/projects" element={<Page><ProjectsPage /></Page>} />
          <Route path="/resume" element={<Page><ResumePage /></Page>} />
          <Route path="/blog" element={<Page><BlogIndexPage /></Page>} />
          <Route path="/blog/:slug" element={<Page><BlogPostPage /></Page>} />
          <Route path="/contact" element={<Page><ContactPage /></Page>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

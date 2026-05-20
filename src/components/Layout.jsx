import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navItems, profile } from '../data/site'
import { ThemeProvider } from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <div className="bg-noise" aria-hidden="true" />
        <div className="bg-orb bg-orb--a" aria-hidden="true" />
        <div className="bg-orb bg-orb--b" aria-hidden="true" />

        <header className="topbar">
          <Link to="/" className="brand" aria-label="Go to home">
            <span className="brand__mark">R.</span>
            <span className="brand__text">{profile.name}</span>
          </Link>

          <div className="topbar__right">
            <nav className="nav" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className="main">
          <motion.div
            className="main__inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  )
}

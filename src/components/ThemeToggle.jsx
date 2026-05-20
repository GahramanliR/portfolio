import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}>
      <span className="theme-toggle__label">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
      
      <div className="theme-toggle__switch">
        <motion.div 
          className="theme-toggle__thumb"
          animate={{ x: theme === 'dark' ? 0 : 18 }}
          transition={{ 
            type: "spring", 
            stiffness: 1500, 
            damping: 40,   
            mass: 0.5       
          }}
        />
      </div>
    </button>
  )
}
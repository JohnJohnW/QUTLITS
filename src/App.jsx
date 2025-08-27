import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Learn from './pages/Learn'
import Contact from './pages/Contact'

// Component to scroll to top on route change
function ScrollToTop() {
  const location = useLocation()
  
  useEffect(() => {
    // Force scroll to top on every navigation
    window.scrollTo(0, 0)
  }, [location]) // Use entire location object to detect all changes
  
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

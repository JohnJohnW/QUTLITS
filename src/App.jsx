import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Join from './pages/Join'
import Events from './pages/Events'
import Learn from './pages/Learn'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div style={{ padding: '20px', color: 'white', backgroundColor: '#120458', minHeight: '100vh' }}>
      <h1>QUT LITS Portfolio</h1>
      <p>If you can see this, React is working!</p>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/events" element={<Events />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

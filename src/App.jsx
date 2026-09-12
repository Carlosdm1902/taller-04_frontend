import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CoursesSection from './components/CoursesSection.jsx'
import EnrollCounter from './components/EnrollCounter.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CoursesSection />
      <EnrollCounter />
      <Footer />
    </div>
  )
}

export default App

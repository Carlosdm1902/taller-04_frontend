import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomeView from './views/HomeView.jsx'
import CoursesView from './views/CoursesView.jsx'
import AboutView from './views/AboutView.jsx'
import LoginView from './views/LoginView.jsx'
import NotFoundView from './views/NotFoundView.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cursos" element={<CoursesView />} />
          <Route path="/nosotros" element={<AboutView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

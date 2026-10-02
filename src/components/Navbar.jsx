import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="navbar__logo" to="/">ReactAcademy</NavLink>
      <nav className="navbar__links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  )
}

export default Navbar

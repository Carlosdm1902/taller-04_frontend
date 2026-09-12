import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar__logo">ReactAcademy</span>
      <nav className="navbar__links">
        <a href="#inicio">Inicio</a>
        <a href="#cursos">Cursos</a>
        <a href="#nosotros">Nosotros</a>
      </nav>
    </header>
  )
}

export default Navbar

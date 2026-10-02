import { Link } from 'react-router-dom'
import './NotFoundView.css'

function NotFoundView() {
  return (
    <section className="not-found-view">
      <p className="not-found-view__code">404</p>
      <h1>No encontramos esa página</h1>
      <p>La dirección no existe o el contenido fue movido.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFoundView
import { Link } from 'react-router-dom'
import './AboutView.css'

function AboutView() {
  return (
    <section className="about-view">
      <div className="about-view__content">
        <p className="about-view__eyebrow">Sobre ReactAcademy</p>
        <h1 className="about-view__title">Aprender haciendo cambia todo.</h1>
        <p className="about-view__description">
          Creamos rutas de aprendizaje enfocadas en la práctica para que cada
          concepto de React se convierta en una habilidad que puedas aplicar.
        </p>
        <div className="about-view__details">
          <article>
            <h2>Práctica primero</h2>
            <p>Proyectos pequeños y concretos para aprender construyendo.</p>
          </article>
          <article>
            <h2>A tu ritmo</h2>
            <p>Empieza desde los fundamentos y avanza paso a paso.</p>
          </article>
        </div>
        <Link className="about-view__link" to="/cursos">Explorar cursos</Link>
      </div>
    </section>
  )
}

export default AboutView
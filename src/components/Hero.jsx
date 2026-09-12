import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Aprende <span className="hero__highlight">React</span> desde cero
      </h1>
      <p className="hero__subtitle">
        Domina la librería más popular del frontend con proyectos prácticos y reales.
      </p>
      <a href="#cursos" className="hero__button">Ver Cursos</a>
    </section>
  )
}

export default Hero

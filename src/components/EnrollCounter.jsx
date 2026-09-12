import { useState } from 'react'
import './EnrollCounter.css'

function EnrollCounter() {
  const [students, setStudents] = useState(0)

  const decrement = () => setStudents((prev) => Math.max(0, prev - 1))
  const increment = () => setStudents((prev) => prev + 1)

  return (
    <section className="enroll">
      <h2 className="enroll__title">¿Cuántos estudiantes van a inscribirse?</h2>
      <p className="enroll__subtitle">Usa los botones para ajustar el número</p>
      <div className="enroll__counter">
        <button className="enroll__button" onClick={decrement} aria-label="Restar">
          −
        </button>
        <span className="enroll__number">{students}</span>
        <button className="enroll__button" onClick={increment} aria-label="Sumar">
          +
        </button>
      </div>
      <p className="enroll__label">estudiantes inscritos</p>
    </section>
  )
}

export default EnrollCounter

import { useState } from 'react'
import './LoginView.css'

function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const isDisabled = submitted || !email.trim() || !password.trim()

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="login-view">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <p className="login-form__eyebrow">ReactAcademy</p>
        <h1 className="login-form__title">Iniciar sesión</h1>
        <p className="login-form__note">
          Interfaz de demostración: no valida credenciales ni inicia sesión.
        </p>

        <label className="login-form__field">
          <span>Correo electrónico</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={submitted}
          />
        </label>

        <label className="login-form__field">
          <span>Contraseña</span>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={submitted}
          />
        </label>

        <button className="login-form__submit" type="submit" disabled={isDisabled}>
          {submitted ? 'Enviado' : 'Continuar'}
        </button>
        {submitted && <p className="login-form__status" role="status">Formulario enviado.</p>}
      </form>
    </section>
  )
}

export default LoginView
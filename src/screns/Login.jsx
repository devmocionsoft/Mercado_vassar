import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

const Login = () => {

  const [ form, handleChange, handleSubmit ] = useForm({
    name: '',
    last_name: '',
    email: '',
    cel: '',
    terms: false
  })

  const { name, last_name, email, cel } = form

  return (
    <>
      <h1>Formulario de registro</h1>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='name'
          placeholder='Nombre'
          autoComplete='off'
          required
          value={name}
          onChange={handleChange}
        />

        <input
          type="text"
          name='last_name'
          placeholder='Apellidos'
          autoComplete='off'
          required
          value={last_name}
          onChange={handleChange}
        />

        <input
          type="email"
          name='email'
          placeholder='Email'
          autoComplete='off'
          required
          value={email}
          onChange={handleChange}
        />

        <input
          type="number"
          name='cel'
          placeholder='Celular'
          autoComplete='off'
          required
          value={cel}
          onChange={handleChange}
        />

        <button type='submit'> Enviar </button>
      </form>
    </>
  )
}

export default Login
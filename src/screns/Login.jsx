import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../UserContext'


const Login = () => {

  const navigate = useNavigate()

  const { form, handleChange } = useContext(UserContext)

  const { name, last_name, email, cell } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario llenado", form);
    navigate('/Terminos')
  }

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
          name='cell'
          placeholder='Celular'
          autoComplete='off'
          required
          value={cell}
          onChange={handleChange}
        />

        <button type='submit'> Enviar </button>
      </form>
    </>
  )
}

export default Login
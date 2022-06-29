import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../UserContext'

import '../styles/screens/Login.css';

export const Login = () => {

  const navigate = useNavigate()

  const { form, handleChange } = useContext(UserContext)

  const { name, email } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario llenado", form);
    navigate('/dados')
  }

  return (
    <div className='page'>

      <div className="container">
        <h1>Registra tus datos</h1>

        <form onSubmit={handleSubmit} className='login'>

          <div className="inputs">
            <input
              type="text"
              name='name'
              placeholder='NOMBRE Y APELLIDO'
              autoComplete='off'
              value={name}
              onChange={handleChange}
            />

            <input
              type="email"
              name='email'
              placeholder='CORREO'
              autoComplete='off'
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="checkboxes">
            <label>
              <input
                type="radio"
                name='age'
              />
              Soy mayor de 18 años y acepto los términos y condiciones.
            </label>

            <label>
              <input
                type="radio"
                name='personal-data'
              />
              Autorizo el tratamiento de mis datos personales,
              <br />
              conformes con el aviso de privacidad y la politica de
              <br />
              tratamiento de datos personales.
            </label>
          </div>


          <button type='submit'> Ingresa Aqui </button>
        </form>
      </div>

    </div>
  )
}

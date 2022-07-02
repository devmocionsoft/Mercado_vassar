import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../UserContext'

import '../styles/screens/Login.css';

import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const usersCollectionRef = collection(db, "users");

const addUser = async (form) => {
  await addDoc( usersCollectionRef, form)
}

export const Login = () => {

  const navigate = useNavigate()

  const { form, handleChange, handleChangeIsOlder, handleChangeTerms } = useContext(UserContext)

  const { name, email } = form;

  const handleIsOlder = ({ target }) => handleChangeIsOlder(target.checked);

  const handleTerms = ({ target }) => handleChangeTerms(target.checked)

  const handleSubmit = (e) => {
    e.preventDefault();

    addUser( form )
    navigate('/dados')
  }

  return (
    <div className="page_login">

      <div className="container_login">
        <h1>Registra tus datos</h1>

        <form onSubmit={handleSubmit} className='login'>

          <div className="inputs">
            <input
              type="text"
              name='fullName'
              placeholder='NOMBRE Y APELLIDO'
              autoComplete='off'
              required
              value={name}
              onChange={handleChange}
            />

            <input
              type="email"
              name='email'
              placeholder='CORREO'
              autoComplete='off'
              required
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                name='isOlder'
                onChange={ handleIsOlder }
              />
              Soy mayor de 18 años y acepto los términos y condiciones.
            </label>

            <label>
              <input
                type="checkbox"
                name='terms'
                required
                onChange={ handleTerms }
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

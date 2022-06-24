import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Terminos = () => {

  const navigate = useNavigate()

  const [isCheck, setIsCheck] = useState(true)

  const handleChange = () => {
    setIsCheck(old => !old)

    console.log(isCheck);

    if (isCheck) {
      setTimeout(() => {
        setIsCheck(false)
        navigate('/Confirmacion')
      }, 150)
    }
  }

  return (
    <>
      <h1>Terminos y condiciones</h1>
      <hr />

      <p>Aliquip nisi nisi elit pariatur do. Nostrud duis id officia magna reprehenderit culpa. Labore veniam adipisicing ea enim sint irure nisi commodo. Fugiat excepteur sint voluptate dolor duis amet officia eiusmod magna cillum eu ea reprehenderit excepteur. Laborum commodo est sunt esse minim esse cupidatat eu laboris ut sint. Culpa proident ea fugiat mollit culpa mollit cillum eu proident esse adipisicing.</p>

      <div>
        aceptar
        <div className="switch-button">
          <input
            type="checkbox"
            name="switch-button"
            id="switch-label"
            className="switch-button__checkbox"
            onChange={ handleChange }
          />
          <label
            htmlFor="switch-label"
            className="switch-button__label"
          />
        </div>
      </div>

    </>
  )
}

export default Terminos;
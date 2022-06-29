import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

export const Terminos = () => {

  const navigate = useNavigate()

  const { handleChangeTerms } = useContext(UserContext)

  const handleChangePage = ({target}) => {

    if (target.checked) {
      console.log(target.checked)
      handleChangeTerms(target.checked)
      setTimeout(() => {
        navigate('/Dados')
      }, 1000)
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
            onChange={ handleChangePage }
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

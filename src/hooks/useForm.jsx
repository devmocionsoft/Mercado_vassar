import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useForm = ( initialState = {} ) => {
  const navigate = useNavigate()

  const [form, setForm] = useState( initialState )

  const handleChange = ({ target }) => {
    setForm((old) => {
      const newValue = { ...old , [target.name]: target.value}

      console.log(newValue);

      return newValue
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario llenado", form);
    navigate('/Terminos')
  }

  return [ form, handleChange, handleSubmit ]
}
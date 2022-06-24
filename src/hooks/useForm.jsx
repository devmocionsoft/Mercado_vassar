import { useState } from "react"

export const useForm = ( initialState = {} ) => {

  const [form, setForm] = useState( initialState )

  const handleChange = ({ target }) => {

    console.log(target);
    setForm((old) => {
      const newValue = { ...old , [target.name]: target.value}
      return newValue
    })
  }

  const handleChangeTerms = (value) => {
    setForm( old => {
      const newValue = { ...old , terms: value }
      console.log(newValue);
      return newValue
    })
  }

  return [ form, handleChange, handleChangeTerms ]
}
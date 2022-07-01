import { useState } from "react"

export const useForm = ( initialState = {} ) => {

  const [form, setForm] = useState( initialState )

  const handleChange = ({ target }) => {

    setForm((old) => {
      const newValue = { ...old , [target.name]: target.value}
      return newValue
    })
  }

  const handleChangeTerms = (value) => {
    setForm( old => {
      const newValue = { ...old , terms: value }
      return newValue
    })
  }

  const handleChangeIsOlder = ( value ) => {
    setForm( old => {
      const newValue = { ...old, isOlder: value }
      return newValue
    })
  }

  return [ form, handleChange, handleChangeTerms, handleChangeIsOlder ]
}
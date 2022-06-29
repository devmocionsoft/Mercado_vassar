import { BrowserRouter ,Route, Routes } from "react-router-dom";

import { useForm } from "./hooks/useForm";
import { UserContext } from "./UserContext";

import { Login, Terminos, Dados, Portada, Ganaste, SigueIntentando, Reto } from "./screens";


export default function MainRouter() {

  const [ form, handleChange, handleChangeTerms ] = useForm({
    name: '',
    last_name: '',
    email: '',
    cell: '',
    terms: false,
    date: new Date()
  })

  return (
    <UserContext.Provider value={{ form, handleChange, handleChangeTerms }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dados" element={<Dados />} />
          <Route path="/Reto/:id" element={<Reto />} />
          <Route path="/Ganaste" element={<Ganaste />} />
          <Route path="/SigueIntentando" element={<SigueIntentando />} />

          <Route path="/Terminos" element={<Terminos />} />
        </Routes>
      </BrowserRouter>

    </UserContext.Provider>
  );
}

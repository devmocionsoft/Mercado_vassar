import { BrowserRouter ,Route, Routes } from "react-router-dom";

import { useForm } from "./hooks/useForm";
import { UserContext } from "./UserContext";

import { Login, Dados, Portada, Ganaste, SigueIntentando, Reto } from "./screens";


export default function MainRouter() {

  const [ form, handleChange, handleChangeTerms, handleChangeIsOlder ] = useForm({
    fullName: '',
    email: '',
    isOlder: false,
    terms: false,
    date: new Date
  })

  return (
    <UserContext.Provider value={{ form, handleChange, handleChangeTerms, handleChangeIsOlder }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/reto/:id" element={<Reto />} />
          <Route path="/ganaste" element={<Ganaste />} />
          <Route path="/sigueIntentando" element={<SigueIntentando />} />
        </Routes>
      </BrowserRouter>

    </UserContext.Provider>
  );
}

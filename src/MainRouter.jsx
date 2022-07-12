import { BrowserRouter ,Route, Routes } from "react-router-dom";

import { useForm } from "./hooks/useForm";
import { UserContext } from "./UserContext";

import { Login, Dados, Portada, Ganaste, SigueIntentando, Reto, ExportToExcel } from "./screens";


export default function MainRouter() {

  const [ form, handleChange, handleChangeTerms, handleChangeIsOlder, handleResetForm ] = useForm({
    fullName: '',
    email: '',
    isOlder: false,
    terms: false,
    date: new Date
  })

  return (
    <UserContext.Provider value={{ form, handleChange, handleChangeTerms, handleChangeIsOlder, handleResetForm }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/reto/:id" element={<Reto />} />
          <Route path="/ganaste" element={<Ganaste />} />
          <Route path="/sigueIntentando" element={<SigueIntentando />} />
          <Route path="/exportExcel" element={<ExportToExcel />} />
        </Routes>
      </BrowserRouter>

    </UserContext.Provider>
  );
}

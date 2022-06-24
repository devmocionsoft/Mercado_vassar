import { BrowserRouter ,Route, Routes } from "react-router-dom";
import App from "./screns/App";
// import Confirmacion from "./screns/Confirmacion";
import Login from "./screns/Login";
import Terminos from "./screns/Terminos";
import Dados from "./Dados";
import { useForm } from "./hooks/useForm";
import { UserContext } from "./UserContext";



export default function MainRouter() {
  console.log("weeee");

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
          <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Terminos" element={<Terminos />} />
          <Route path="/Dados" element={<Dados />} />
        </Routes>
      </BrowserRouter>

    </UserContext.Provider>
  );
}

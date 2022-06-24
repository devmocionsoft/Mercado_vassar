import { Route, Routes } from "react-router-dom";
import App from "./screns/App";
import Confirmacion from "./screns/Confirmacion";
import Login from "./screns/Login";
import Terminos from "./screns/Terminos";


export default function MainRouter() {
  console.log("weeee");
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Terminos" element={<Terminos />} />
      <Route path="/Confirmacion" element={<Confirmacion />} />
    </Routes>
  );
}

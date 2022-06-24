import { Route, Routes } from "react-router-dom";
import App from "./App";
import Dados from "./Dados";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/suerte" element={<Dados />} />
    </Routes>
  );
}

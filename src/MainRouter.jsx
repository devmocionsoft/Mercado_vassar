import { Route, Routes } from "react-router-dom";
import App from "./App";

export default function MainRouter() {
    console.log("weeee");
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

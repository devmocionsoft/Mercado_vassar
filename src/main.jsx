import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./MainRouter";

import "./index.css";
import './styles/App.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);

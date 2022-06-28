import { useState } from "react";
import Dado from "../componentes/Dado";
import "../Dados.css";

const Dados = () => {

  const [isThrow, setIsThrow] = useState(false)

  const send = () => {
    setIsThrow(true)
    setTimeout(() => {
      setIsThrow(false)
    }, 0);
  }

  return (
    <div className="pageDados">
      <div className="DadosContainer">
        <Dado isThrow={isThrow}/>
        <Dado isThrow={isThrow}/>
      </div>
      <button onClick={send} >ROLL THE DICE</button>
    </div>
  );
};

export default Dados;

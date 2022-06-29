import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dado, Button} from "../componentes";

import "../styles/screens/Dados.css";

export const Dados = () => {

  const navigate = useNavigate()

  const [isThrow, setIsThrow] = useState(false)

  const send = () => {
    setIsThrow(true)
    setTimeout(() => {
      setIsThrow(false)
    }, 0);
  }

  const handleNavigate = () => navigate('/reto/12')

  return (
    <div className="page">

      <div className="pageDados">
        <div className="DadosContainer">
          <Dado isThrow={isThrow} />
          <Dado isThrow={isThrow} />
        </div>

        <Button color='dark'>
          <div onClick={ send } className='button-container'>
            Haz <strong>CLIC</strong>
            <br />
            para lanzar los dados
          </div>
        </Button>

        <button onClick={ handleNavigate }>Continuar</button>
      </div>
    </div>
  );
};

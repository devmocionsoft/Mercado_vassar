import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dado, Button} from "../componentes";

import "../styles/screens/Dados.css";

export const Dados = () => {

  const navigate = useNavigate()

  const [isThrow, setIsThrow] = useState(false)

  const [dado1, setDado1] = useState(1)
  const [dado2, setDado2] = useState(1)

  const send = async() => {
    setIsThrow(true)
    await setTimeout(() => {
      setIsThrow(false)
    }, 0);
    // console.log(`Dado1: ${dado1}`);
  }

  useEffect(() => {
    console.log(`Resultado: ${dado1 + dado2}`);

    if ( dado1 === 1 && dado2 === 1) return

    setTimeout(() => {
      navigate(`/reto/${dado1 + dado2}`)
    }, 3000);

  }, [ dado1, dado2 ])

  return (
    <div className="page">

      <div className="pageDados">
        <div className="DadosContainer">
          <Dado isThrow={isThrow} setDado={setDado1}/>
          <Dado isThrow={isThrow} setDado={setDado2}/>
        </div>

        <Button color='dark'>
          <div onClick={ send } className='button-container'>
            Haz <strong>CLIC</strong>
            <br />
            para lanzar los dados
          </div>
        </Button>

      </div>
    </div>
  );
};

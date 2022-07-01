import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dado, Button} from "../componentes";

import "../styles/screens/Dados.css";

export const Dados = () => {

  const navigate = useNavigate()

  const [isThrow, setIsThrow] = useState(false)

  const [dado1, setDado1] = useState(0)
  const [dado2, setDado2] = useState(0)

  const send = async() => {
    setIsThrow(true)
    await setTimeout(() => {
      setIsThrow(false)
    }, 0);
  }

  useEffect(() => {
    console.log(`Resultado: ${dado1 + dado2}`);

    if ( dado1 === 0 && dado2 === 0) return

    setTimeout(() => {
      navigate(`/reto/${dado1 + dado2}`)
    }, 3000);

  }, [ dado1, dado2 ])

  return (

    <div className="pageDados">
      <div className="container-dados">
        <div className="DadosContainer">
          <Dado isThrow={isThrow} setDado={setDado1} cube={'cube_1'} />
          <Dado isThrow={isThrow} setDado={setDado2} cube={'cube_2'} />
        </div>

        <Button color='dark' onClick={ send }>
          <div className='button-container' onClick={ send }>
            Haz <strong>CLIC</strong>
            <br />
            para lanzar los dados
          </div>
        </Button>
      </div>
    </div>
  );
};

import Dado from "../componentes/Dado";
import "../Dados.css";

const Dados = () => {
  return (
    <div className="pageDados">
      <div className="DadosContainer">
        <Dado />
        <Dado />
      </div>
      <button>ROLL THE DICE</button>
    </div>
  );
};

export default Dados;

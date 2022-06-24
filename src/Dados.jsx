import "./Dados.css";
import die1 from "./assets/dice-01.svg";
import die2 from "./assets/dice-02.svg";
import die3 from "./assets/dice-03.svg";
import die4 from "./assets/dice-04.svg";
import die5 from "./assets/dice-05.svg";
import die6 from "./assets/dice-06.svg";
import { useEffect, useRef, useState } from "react";

let images = [die1, die2, die3, die4, die5, die6];

export default function Dados() {
  const [total, setTotal] = useState("");

  const dice1 = useRef();
  const dice2 = useRef();

  useEffect(() => {
    if (dice1 && dice2) {
      dice1.current.setAttribute("src", die1);
      dice2.current.setAttribute("src", die1);
    }
  }, [dice1, dice2]);

  const roll = () => {
    dice1.current.classList.add("shake");
    dice2.current.classList.add("shake");
    setTimeout(function () {
      dice1.current.classList.remove("shake");
      dice2.current.classList.remove("shake");
      let dieOneValue = Math.floor(Math.random() * 6);
      let dieTwoValue = Math.floor(Math.random() * 6);

      console.log(dieOneValue, dieTwoValue);
      dice1.current.setAttribute("src", images[dieOneValue]);
      dice2.current.setAttribute("src", images[dieTwoValue]);
      setTotal("Your roll is " + (dieOneValue + 1 + (dieTwoValue + 1)));
    }, 1000);
  };

  return (
    <div className="container">
      <div className="dice-wrapper">
        <img ref={dice1} />
        <img ref={dice2} />
      </div>
      <p className="total">{total}</p>
      <button onClick={roll}>ROLL THE DICE</button>
    </div>
  );
}

import React, { useRef } from 'react'
import './Dado.css'


const Dado = ({ send }) => {
  const cubeRef = useRef(),
        time = 2;

  const handleSend = () => {
    const cube = cubeRef.current

    cube.style.transition = '';
    cube.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => {
      cube.style.transition = `transform ${time}s`;
      const randomValue = Math.floor((Math.random() * 6) + 1);
      console.log(`randomValue: ${randomValue}` );

      switch(randomValue) {
        case 1:
            cube.style.transform = `rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
            break;
        case 2:
            cube.style.transform = `rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
            break;
        case 3:
            cube.style.transform = `rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
            break;
        case 4:
            cube.style.transform = `rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
            break;
        case 5:
            cube.style.transform = `rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
            break;
        case 6:
            cube.style.transform = `rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
            break;
      };
    }, time * 10);
  }

  return (
    <div className="DadoContainer">
      <div className="cube" onClick={handleSend} ref={cubeRef}>
          <div className="cube-face front">
              <div className="inside">
                  <span className="dot"></span>
              </div>
          </div>
          <div className="cube-face back">
              <div className="inside">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
              </div>
          </div>
          <div className="cube-face left">
              <div className="inside">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
              </div>
          </div>
          <div className="cube-face right">
              <div className="inside">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
              </div>
          </div>
          <div className="cube-face top">
              <div className="inside">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
              </div>
          </div>
          <div className="cube-face bottom">
              <div className="inside">
                  <span className="dot"></span>
                  <span className="dot"></span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dado
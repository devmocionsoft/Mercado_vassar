import React, { useEffect, useRef } from 'react'
import { send } from '../utils/send';
import '../styles/components/Dado.css'

export const Dado = ({ isThrow, setDado, cube, position }) => {
  const cubeRef = useRef(),
        time = 2;

  const getValues = async () => {
    const value = await send( cubeRef, time );
    setDado( value )
  }

  useEffect(() => {
    if (isThrow) getValues()
  }, [isThrow])

  return (
    <div className={`DadoContainer ${ position }`}>
      <div className={`cube ${cube}`} ref={cubeRef}>
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
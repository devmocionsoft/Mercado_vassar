import { useNavigate, useParams } from "react-router-dom"

import '../styles/screens/Reto.css'

import RETO1 from '../assets/RETO1.png'
import RETO2 from '../assets/RETO2.png'
import RETO3 from '../assets/RETO3.png'
import RETO4 from '../assets/RETO4.png'
import RETO5 from '../assets/RETO5.png'
import RETO6 from '../assets/RETO6.png'
import RETO7 from '../assets/RETO7.png'
import RETO8 from '../assets/RETO8.png'
import RETO9 from '../assets/RETO9.png'
import RETO10 from '../assets/RETO10.png'
import RETO11 from '../assets/RETO11.png'
import RETO12 from '../assets/RETO12.png'

const ArrayImg = [
  { key: 1, image: RETO1},
  { key: 2, image: RETO2},
  { key: 3, image: RETO3},
  { key: 4, image: RETO4},
  { key: 5, image: RETO5},
  { key: 6, image: RETO6},
  { key: 7, image: RETO7},
  { key: 8, image: RETO8},
  { key: 9, image: RETO9},
  { key: 10, image: RETO10},
  { key: 11, image: RETO11},
  { key: 12, image: RETO12},
]

export const Reto = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const ganaste = () => navigate('/ganaste')
  const sigueIntentando = () => navigate('/sigueIntentando')

  return (
    <div
      className="fondo-Reto"
      style={{ backgroundImage: `url(${ ArrayImg[id - 1].image })` }}
    >

      <div className="buttons">
        <div className="button" onClick={ ganaste } />
        <div className="button" onClick={ sigueIntentando } />
      </div>
    </div>
  )
}

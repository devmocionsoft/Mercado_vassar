import '../styles/screens/SigueIntentando.css'

export const SigueIntentando = () => {
  return (
    <div className="page">

      <div className="container-perdiste">

        <h1>
          Sigue
          <br />
          Inténtandolo
        </h1>

        <div className='Perdiste-division'>
          <h3>
            <strong>
              Con bóton de pago
              <br />
              y link de pago
            </strong>
            <br />
            los límites los pones tú
          </h3>
        </div>
      </div>


      {/* <img src={ ganaste } alt="ganaste" /> */}

      <div className="container-perdiste">
        <div className='Ganaste-division'>
          <h3>
            <strong>
              De ahora en adelante
              <br />
              elige como cobrar
            </strong>
            <br />
            esta en tus manos
            <br />
            <p><small>*Aplican términos y condiciones*</small></p>
          </h3>
        </div>
      </div>

    </div>
  )
}

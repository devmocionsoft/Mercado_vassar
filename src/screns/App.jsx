import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Bienvenidos</h1>
      <Link to='/login'>
        <button>
          Formulario de registro
        </button>
      </Link>
    </>
  )
}

export default App

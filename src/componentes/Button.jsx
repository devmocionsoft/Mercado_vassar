import '../styles/components/Button.css'

export const Button = ({ children, color }) => {
  return (
    <button className={`button-component ${color}`}>
      { children }
      <div className='puntos'>
        <div className="punto" />
        <div className="punto" />
        <div className="punto" />
      </div>
    </button>
  )
}
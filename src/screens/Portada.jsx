import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/screens/Portada.css';

export const Portada = () => {
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/Login')

  return <div className='fondo-portada' onClick={ handleNavigate } />
}

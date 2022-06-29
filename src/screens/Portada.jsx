import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/screens/Portada.css';

export const Portada = () => {
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/login')

  return <div className='fondo-portada' onClick={ handleNavigate } />
}

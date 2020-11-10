import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiClipboard, FiArchive } from 'react-icons/fi'

import './style.css'

const Landing = () => {

  return (
    <div className='landing-page'>
      <Link to='visit/create' className='createVisit'>Cadastrar Visita<FiHome size={40} color='000'/></Link>
      <Link to='visits' className='visits'>Ver Visitas em Aberto<FiClipboard size={40} color='000'/></Link>
      <Link to='postVisits' className='postVisits'>Ver Base de Dados de Visitas<FiArchive size={40} color='000'/></Link>
    </div>
  )
}

export default Landing;
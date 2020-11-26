import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiClipboard, FiArchive } from 'react-icons/fi'

import './style.css'
import Title from '../../components/title';

const Landing = () => {

  return (
    <div className='landing-page'>

      <Title title='Triangulo' goback={false}/>

      <main className='landing'>

        <Link to='visit/create' className='createVisit'>Cadastrar Visita<FiHome size={40} color='000'/></Link>

        <Link to='visit' className='visitss'>Ver Visitas em Aberto<FiClipboard size={40} color='000'/></Link>

        <Link to='postVisit' className='postVisits'>Ver Base de Dados de Visitas<FiArchive size={40} color='000'/></Link>

      </main>
      
    </div>
  )
}

export default Landing;
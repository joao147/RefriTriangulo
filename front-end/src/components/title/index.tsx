import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

interface TitleProps{
  title: string;
}

const Title:React.FC<TitleProps> = ({ title }) => {

  return (
    <div className="title">
      <Link to='/' className='goback'><FiArrowLeft size={30} color='000000'/></Link>
      <h1>{title}</h1>
    </div>
  )
}

export default Title;
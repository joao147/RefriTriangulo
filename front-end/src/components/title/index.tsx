import { StringifyOptions } from 'querystring';
import React from 'react';

import './styles.css'

interface TitleProps{
  title: string;
  src: string;
}

const Title:React.FC<TitleProps> = ({ title, src }) => {

  return (
    <div className="title">
      <h1>{title}</h1>
      <img src={src} alt={title}/>
    </div>
  )
}

export default Title;

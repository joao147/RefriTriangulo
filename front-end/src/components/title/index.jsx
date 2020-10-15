import React from 'react';

import './styles.css'

function Title({ title,src }){
  return (
    <div className="title">
      <h1>{title}</h1>
      <img src={src} alt="Logo"/>
    </div>
  )
}

export default Title;

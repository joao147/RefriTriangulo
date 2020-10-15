import React from 'react';

import './styles.css'

function Input({ name, type, label }){
  return (
    <div className="inputField">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name}/>
    </div>
  )
}

export default Input;

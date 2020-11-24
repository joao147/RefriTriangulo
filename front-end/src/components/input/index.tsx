import React, { InputHTMLAttributes } from 'react';

import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ name, type, label, ...rest }) => {

  return (
    <div className="inputField">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...rest}/>
    </div>
  )
}

export default Input;

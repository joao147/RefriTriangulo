import React from 'react'

import './styles.css'

function ButtonNext({ name, type }){
  return (
    <div className="buttonContainer">
      <button type={type}>
        {name}
      </button>
    </div>
  );
}

export default ButtonNext;
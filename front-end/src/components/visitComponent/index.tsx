import React from 'react';

import {VisitItemProps} from '../visitItem/index'

import './style.css'

const VisitComponent: React.FC<VisitItemProps> = (({visitItem}) => {

  return (
    <div className='visit'>
      <header>

        <p className='name'>Nome do cliente: {visitItem.name}</p>

        <span className='date'>Data da visita: {visitItem.visitDate}</span>

      </header>

      <main className='main'>

        <p>Endereço: {visitItem.adress}</p>

        <p>Contado: {visitItem.contact}</p>

        <p>Contado opcional: {visitItem.secondContact}</p>

        {visitItem.visitInformation.map((visitInfo , index) => {

          return(
            <div key={index} className='infos'>

              <p>Equipamento: {visitInfo.equipamentType}</p>

              <p>Modelo: {visitInfo.equipamentModel}</p>

              <p>Problema constatado: {visitInfo.problem}</p>

            </div>
          )
        })}

      </main>

    </div>
  );
})

export default VisitComponent;

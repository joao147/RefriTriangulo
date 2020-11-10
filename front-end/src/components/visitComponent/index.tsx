import React from 'react';

import {VisitItemProps} from '../visitItem/index'

const VisitComponent: React.FC<VisitItemProps> = (({visitItem}) => {

  return (
    <div>
      <header>

        <p className='name'>Nome do cliente: {visitItem.name}</p>

        <span className='date'>Data da visita: {visitItem.visitDate}</span>

      </header>

      <main>

        <p>Endereço: {visitItem.adress}</p>

        <p>Contado: {visitItem.contact}</p>

        <p>Contado opcional: {visitItem.secondContact}</p>

        {visitItem.visitInformation.map((visitInfo , index) => {
          return(
            <div key={index} className='infos'>

              <p>Endereço: {visitInfo.equipamentType}</p>

              <p>Endereço: {visitInfo.equipamentModel}</p>

              <p>Endereço: {visitInfo.problem}</p>

            </div>
          )
        })}

      </main>

    </div>
  );
})

export default VisitComponent;

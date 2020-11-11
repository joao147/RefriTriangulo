import React from 'react';

import './style.css';

export interface Visit{
  id: number;
  name: string;
  adress: string;
  contact: string;
  secondContact?: string;
  visitInformation:{equipamentType: string, equipamentModel: string, problem: string}[];
  visitDate: string;}

export interface VisitItemProps{
  visitItem: Visit;
}

  const VisitItem:React.FC<VisitItemProps> = ({visitItem}) => {

    return (
      <div className='visitItem'>
          <main>
            <p className='name'>Nome do cliente: {visitItem.name}</p>
            <span className='date'>Data da visita: {visitItem.visitDate}</span>
          </main>
      </div>
    )
}

export default VisitItem;

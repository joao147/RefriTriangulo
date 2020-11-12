import React from 'react';

import './style.css';

export interface Visit{
  id: number;
  name: string;
  document: string;
  adress: string;
  contact: string;
  secondContact?: string;
  technician: string;
  visitInformation:{equipamentType: string, equipamentBrand: string, equipamentModel: string, problem: string}[];
  status: boolean;
  visitDate: string;}

export interface VisitItemProps{
  visitItem: Visit;
}

  const Visits:React.FC<VisitItemProps> = ({visitItem}) => {

    return (
      <div className='visitItem'>
          <main>
            <p className='name'>Nome do cliente: {visitItem.name}</p>
            <span className='date'>Data da visita: {visitItem.visitDate}</span>
          </main>
      </div>
    )
}

export default Visits;

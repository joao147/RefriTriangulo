import React from 'react';

import './style.css';

export interface Visit{
  id: number;
  name: string;
  adress: string;
  contact: string;
  secondContact?: string;
  visitInformation:[{equipamenteType: string, equipamentModel: string, problem: string}];
  visitDate: string;
}

interface VisitItemProps{
  visitItem: Visit;
}

  const VisitItem:React.FC<VisitItemProps> = ({visitItem}) => {

  return (
    <div className='visitItem'>
      <header><p className='name'>{visitItem.name}</p><span className='date'>{visitItem.visitDate}</span></header>
        <main></main>
      <footer></footer>
    </div>
  )
}

export default VisitItem;

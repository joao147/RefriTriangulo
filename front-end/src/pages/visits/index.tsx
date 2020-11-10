import React, { useState } from 'react';

import api from '../../services/api'

import VisitItem, {Visit} from '../../components/visitItem'
import Title from '../../components/title';

import './style.css';

const Visits = () => {

  const [visits, setVisits] = useState([]);
  
  async function searchTeachers(){

    const response = await api.get('visit')

    setVisits(response.data);
  }

  searchTeachers();
  
  return (
    <div className="visits">
      <Title title="Triangulo"/>
      {visits.map((visitItem: Visit) => {return(<VisitItem key={visitItem.id} visitItem={visitItem}/>)})}
    </div>
  )
}

export default Visits;

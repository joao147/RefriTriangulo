import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import api from '../../services/api';

import VisitItem, {Visit} from '../../components/visitItem';
import Title from '../../components/title';

import './style.css';

const Visits = () => {

  const [visits, setVisits] = useState([]);
  
  async function getVisits(){

    const response = await api.get('visit')

    setVisits(response.data);
  }

  function setId(id: number){

    const storage = window.localStorage;

    storage.setItem('id', String(id));
  }

  useEffect(()=> {getVisits()}, []);

  return (
    <div className="visits-page">
      
      <Title title="Triangulo"/>
     
      <div className="visits">
        {visits.map((visitItem: Visit) => {
          return(
            <Link key={visitItem.id} className='link' to={`visit/${visitItem.id}`} onClick={() => {setId(visitItem.id)}}>
              <VisitItem visitItem={visitItem}/>
            </Link>
        )})}
      </div>

    </div>
  )
}

export default Visits;

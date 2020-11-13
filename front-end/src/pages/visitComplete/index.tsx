import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import VisitComponent from '../../components/visitComplete'
import { Visit } from '../../components/visits'
import Title from '../../components/title'
import { Link } from 'react-router-dom';

import './style.css'

const VisitComplete = () => {

  const [visitItem, setVisitItem] = useState({
    id: 0, 
    name: '',
    document: '',
    adress: '',
    contact: '',
    secondContact: '',
    technician: '',
    visitInformation: [{ equipamentType: '', equipamentBrand: '', equipamentModel: '', problem: '', }],
    status: false,
    visitDate: '',
    visitHour: ''
  });

  const id = window.localStorage.getItem('id');

  const url = `visit/${id}`;
  
  async function getVisit(){    

    api.get(url).then((response) => {
      
      const { 
        id, 
        name,
        document,
        adress,
        contact,
        secondContact,
        technician,
        visitInformation,
        status,
        visitDate,
        visitHour
      } = response.data;

      const data = {
        id,
        name,
        document,
        adress,
        contact,
        secondContact,
        technician,
        visitInformation,
        status,
        visitDate,
        visitHour
      }

      setVisitItem(data)
    })
  }

  useEffect(()=> {getVisit()}, []);
  
  return(
    <div className='visitComplete'>
      <Title title='Triangulo' to='/visit'/>
      <VisitComponent visitItem={visitItem}/>
      <div className='helper'>
        <Link to={`/visit/postVisit/create/${visitItem.id}`} className='visitButton'>
          <button type='button' >Concluir o cadastro da visita</button>
        </Link>
      </div>
    </div>
  );
}

export default VisitComplete;

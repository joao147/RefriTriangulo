import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import VisitComponent from '../../components/visitComponent'
import { Visit } from '../../components/visitItem'
import Title from '../../components/title'
import { Link } from 'react-router-dom';



const VisitComplete = () => {

  const [visitItem, setVisitItem] = useState({
    id: 0, 
    name: '',
    adress: '',
    contact: '',
    secondContact: '',
    visitInformation: [{ equipamentType: '', equipamentModel: '', problem: '', }],
    visitDate: ''
  });

  const id = window.localStorage.getItem('id');

  const url = `visit/${id}`;
  
  async function getVisit(){    

    api.get(url).then((response) => {
      
      const { 
        id, 
        name,
        adress,
        contact,
        secondContact,
        visitInformation,
        visitDate
      } = response.data;

      const data = {
        id,
        name,
        adress,
        contact,
        secondContact,
        visitInformation,
        visitDate
      }

      setVisitItem(data)
    })
  }

  useEffect(()=> {getVisit()}, []);
  
  return(
    <div className='visitComplete'>
      <Title title='Triangulo' to='/visit'/>
      <VisitComponent visitItem={visitItem}/>
      <Link to={`/visit/postVisit/create/${visitItem.id}`}>
        <button type='button' >Concluir o cadastro da visita</button>
      </Link>
    </div>
  );
}

export default VisitComplete;

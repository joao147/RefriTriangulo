import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import VisitComponent from '../../components/visitComponent'
import { Visit } from '../../components/visitItem'
import Title from '../../components/title'

const VisitComplete = () => {

  const [visit, setVisit] = useState({});

  const id = window.localStorage.getItem('id');

  const url = `/visit/${id}`;
  
  async function getVisit(){    
    const response = await api.get(url);

    setVisit(response.data);
  }

  useEffect(()=> {getVisit()}, []);
  
  return(
    <div>
      <Title title='Triangulo'/>
     <VisitComponent visitItem={visit as Visit}/>
    </div>
  );
}

export default VisitComplete;

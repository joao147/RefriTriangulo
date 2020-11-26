import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'

import StorageContext from '../../context/context';

import api from '../../services/api';

import Title from '../../components/title';
import VisitItem from '../../components/visits'

import './style.css';

const Visits = () => {

  const { setIsValid, token } = useContext(StorageContext);

  const history = useHistory();

  const [visits, setVisits] = useState([]);
  
  async function getVisits(){
    await api.get('visit',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      if(res.data === false){
        setIsValid(false);
        history.push('/login');
      }else{
        setVisits(res.data);
      }
    })
    .catch(()=>{
      alert('Ocorreu um erro, tentei novamente em 2 minutos!');
    })
  }

  function setId(id){

    const storage = window.localStorage;

    storage.setItem('id', String(id));
  }

  useEffect(()=> {getVisits()}, []);

  return (
    <div className="visits-page">
      
      <Title title="Triangulo"/>
     
      <div className="visits">
        {visits.map((visitItem) => {
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

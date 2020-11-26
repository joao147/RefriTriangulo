import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import StorageContext from '../../context/context';

import api from '../../services/api'

import VisitComponent from '../../components/visitComplete'
import Title from '../../components/title'

import './style.css'

const VisitComplete = () => {

  const { setIsValid, token } = useContext(StorageContext);

  const history = useHistory();

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

    api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      if(res.data === false){
        setIsValid(false);
        history.push('/login');
      }else{
        setVisitItem(res.data);
      }
    })
    .catch(()=>{
      alert('Ocorreu um erro, tentei novamente em 2 minutos!');
    })
  }

  useEffect(()=> {getVisit()}, []);
  
  return(
    <div className='visitComplete'>
      <Title title='Triangulo' to='/visit'/>
      <VisitComponent visitItem={visitItem}/>
      <div className='helper1'>
        <Link to={`/visit/postVisit/create/${visitItem.id}`} className='visitButton'>
          <button type='button' >Concluir o cadastro da visita</button>
        </Link>
      </div>
    </div>
  );
}

export default VisitComplete;

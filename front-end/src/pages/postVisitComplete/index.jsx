import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import StorageContext from '../../context/context';

import api from '../../services/api';

import Title from '../../components/title';
import PostVisitItem from '../../components/postVisitComplete';

import './style.css';

const PostVisitComplete = () => {

  const { setIsValid, token } = useContext(StorageContext);

  const history = useHistory();

  const [postVisit, setPostVisit] = useState({
    id: 0,
    laborPrice: '',
    totalPrice: '',
    visit:{
      id: 0,
      name: '',
      document: '',
      adress: '',
      contact: '',
      secondContact: '',
      technician: '',
      visitInformation: [{
        equipamentType: '',
        equipamentBrand: '',
        equipamentModel: '',
        problem: ''
      }],
      status: true,
      visitDate: '',
      visitHour: '',
    },
    material:[{
      materia:'', 
      materialPrice:'', 
      guarantee:''
    }]
  });

  const id = window.localStorage.getItem('id');

  const url = `post_visit/${id}`;

  async function setPostVisitData(){

    await api.get(url,{ 
      headers: {
        Authorization: `Bearer ${token}`
      }
     })
    .then((res) => {
      if(res.data === false){
        setIsValid(false);
        history.push('/login');
      }else{
        setPostVisit(res.data);
      }
    })
    .catch(()=>{
      alert('Ocorreu um erro, tentei novamente em 2 minutos!');
    })
  }

  useEffect(()=>{setPostVisitData()},[])
  
  return (

    <div className='postVisitComplete'>

      <Title title='Triangulo' to='/postVisit'/>

      <div className="helper1">

        <PostVisitItem postVisitItem={postVisit}/>

      </div>
      
    </div>
  )
}

export default PostVisitComplete;

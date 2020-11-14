import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Title from '../../components/title';
import PostVisitItem from '../../components/postVisitComplete';

import './style.css';

const PostVisitComplete = () => {

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

    await api.get(url)
    .then((response) => {setPostVisit(response.data);})
  }

  useEffect(()=>{setPostVisitData()},[])
  
  return (

    <div className='postVisitComplete'>

      <Title title='Triangulo' to='/postVisit'/>

      <div className="helper">

        <PostVisitItem postVisitItem={postVisit}/>

      </div>
      
    </div>
  )
}

export default PostVisitComplete;

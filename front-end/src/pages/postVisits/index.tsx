import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiFilter } from 'react-icons/fi'

import api from '../../services/api';

import Title from '../../components/title';
import Input from '../../components/input';
import PostVisitItem, { PostVisit } from '../../components/postVisits'

import convertDate from '../../utils/convertDate';

import './style.css';

const PostVisits = () => {

  const [postVisits, setPostVisits] = useState([]);
  const [name, setName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  var date = visitDate;
  
  async function getPostVisits(){
    api.get('post_visit', {params:{ name, visitDate }}).then((response) => {setPostVisits(response.data)})
  }

  function setId(id: number){

    const storage = window.localStorage;

    storage.setItem('id', String(id));
  }

  useEffect(()=> {getPostVisits()}, []);

  async function handlerFilter(){

    if( name === '' && visitDate === '' ){

      alert('Preencher nome do cliente ou data da visita')

    }else {
      
      date = convertDate(visitDate);

      await api.get('post_visit', {params: { name, visitDate: date }})
      .then((response)=>{
        // setPostVisits(response.data);
        console.log((response.data));
      })
    }
  }

  return (
    <div className="postVisits-page">

      <Title title='Triangulo' to='/'/>

      <section className='filter'>

        <p className='p-filter'>
          <FiFilter size={20} color='000000'/>
          Filtro de visitas
          <FiFilter size={20} color='000000'/>
        </p>

        <Input
          className='input-filter'
          name='name' 
          label='Nome do Cliente' 
          type='text'
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />

        <Input 
          className='input-filter'
          name='visitDate' 
          label='Data da visita' 
          type='date'
          value={visitDate}
          onChange={(e)=>{setVisitDate(e.target.value)}}
        />

        <button className='button-filter' type='button' onClick={handlerFilter}>
          filtrar
        </button>

      </section>

      {postVisits.map((postVisitItem: PostVisit, index) => {
        return (
          <div className="helper" key={index}>
            <Link to={`postVisit/${postVisitItem.visit.id}`} className='link' onClick={()=>{setId(postVisitItem.visit.id)}}>
              <PostVisitItem postVisit={postVisitItem}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PostVisits;


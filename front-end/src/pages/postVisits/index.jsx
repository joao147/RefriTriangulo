import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiFilter } from 'react-icons/fi'

import StorageContext from '../../context/context';

import api from '../../services/api';

import Title from '../../components/title';
import Input from '../../components/input';
import PostVisitItem from '../../components/postVisits'

import convertDate from '../../utils/convertDate';

import './style.css';

const PostVisits = () => {

  const { setIsValid, token } = useContext(StorageContext);

  const history = useHistory();

  const [postVisits, setPostVisits] = useState([]);
  const [name, setName] = useState('');
  const [visitDate, setVisitDate] = useState('');

  var date = visitDate;
  
  async function getPostVisits(){
    api.get('post_visit', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params:{ 
        name, 
        visitDate 
      }
    })
    .then((res) => {
      if(res.data === false){
        setIsValid(false);
        history.push('/login');
      }else{
        setPostVisits(res.data);
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

  useEffect(()=> {getPostVisits()}, []);

  async function handlerFilter(){

    if( name === '' && visitDate === '' ){

      alert('Preencher nome do cliente ou data da visita')

    }else {
      if(visitDate !== ''){
        date = convertDate(visitDate);
      }

      await api.get('post_visit', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: { 
          name, 
          visitDate: date 
        }
      })
      .then((res) => {
        if(res.data === false){
          setIsValid(false);
          history.push('/login');
        }else{
          setPostVisits(res.data);
        }
      })
      .catch(()=>{
        alert('Ocorreu um erro, tentei novamente em 2 minutos!');
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

      {postVisits.map((postVisitItem, index) => {
        return (
          <div className="helper1" key={index}>
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


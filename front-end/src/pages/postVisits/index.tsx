import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import api from '../../services/api';

import Title from '../../components/title';
import PostVisitItem, { PostVisit } from '../../components/postVisits'

import './style.css';

const PostVisits = () => {

  const [postVisits, setPostVisits] = useState([]);
  
  async function getPostVisits(){
    api.get('post_visit').then((response) => {setPostVisits(response.data)})
  }

  function setId(id: number){

    const storage = window.localStorage;

    storage.setItem('id', String(id));
  }

  useEffect(()=> {getPostVisits()}, []);

  return (
    <div className="postVisits-page">
      <Title title='Triangulo' to='/'/>
      {postVisits.map((postVisitItem: PostVisit, index) => {
        return (
          <div className="helper" key={index}>
            <PostVisitItem postVisit={postVisitItem}/>
          </div>
        )
      })}
    </div>
  )
}

export default PostVisits;


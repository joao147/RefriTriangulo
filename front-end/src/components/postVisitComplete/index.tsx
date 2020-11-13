import React from 'react';

import {Visit} from '../visits'

import './style.css';

interface PostVisit{
  id: number;
  laborPrice: string;
  totalPrice: string;
  visit: Visit;
  material:{
    materia:string, 
    materialPrice:string, 
    guarantee:string
  }[];
}

interface PostVisitProps{
  postVisitItem: PostVisit;
}


const PostVisitComplete:React.FC<PostVisitProps> = ({postVisitItem}) => {

  return (
    <div className="postVisitComplete">

    </div>
  )
}

export default PostVisitComplete;

import React from 'react';

import './style.css'

export interface PostVisit{
  visit: {
    name: string;
    visitDate: string;
  }
}

interface PostVisitItemProps{
  postVisit: PostVisit;
}

const PostVisits: React.FC<PostVisitItemProps> = ({postVisit}) => {

  return (
    <div className="postVisitItem">
      <main>
        <p className='name'>Nome do cliente: {postVisit.visit.name}</p>
        <span className='date'>Data da visita: {postVisit.visit.visitDate}</span>
      </main>
    </div>
  )
}

export default PostVisits;

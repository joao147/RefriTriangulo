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

    <div className="postVisitItem">

      <header>

        <p className='name'>Nome do cliente: {postVisitItem.visit.name}</p>

        <p className='name'>CPF/CNPJ: {postVisitItem.visit.document}</p>

        <span className='date'>Data da visita: {postVisitItem.visit.visitDate}</span>

        <span className='date'>Horário da visita: {postVisitItem.visit.visitHour}</span>

        <span className='date'>Preço total: R${postVisitItem.totalPrice}</span>

      </header>

      <main >
        
        <section className='infos-section'>

          <p>Tecnico: {postVisitItem.visit.technician}</p>

          <p>Preço da mão-de-obra: R${postVisitItem.laborPrice}</p>

          <p>Endereço: {postVisitItem.visit.adress}</p>

          <p>Contado: {postVisitItem.visit.contact}</p>

          <p>Contado opcional: {postVisitItem.visit.secondContact}</p>

        </section>

        <section className='equipaments-section'>

          <p className='subtitle'>Equipamentos vistos</p>

          {postVisitItem.visit.visitInformation.map((visitInfo , index) => {

            return(
              <div key={index} className='infos'>

                <p>Equipamento: {visitInfo.equipamentType}</p>

                <p>Marca: {visitInfo.equipamentBrand}</p>

                <p>Modelo: {visitInfo.equipamentModel}</p>

                <p>Problema constatado: {visitInfo.problem}</p>

              </div>
            )
          })}

        </section >

        <section className='materials-section'>

        <p className='subtitle'>Materiais usados</p>

          {postVisitItem.material.map((material , index) => {

            return(
              <div key={index} className='infos'>

                <p>Material: {material.materia}</p>

                <p>Preço do material: R${material.materialPrice}</p>

                <p>garantia: {material.guarantee}</p>

              </div>
            )
            })}
        </section>

      </main>

    </div>
  )
}

export default PostVisitComplete;

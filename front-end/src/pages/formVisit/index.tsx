import React, { useState } from 'react';

// import ButtonNext from '../../components/buttonNext';
import Input from '../../components/input/index';
import Title from '../../components/title/index';
import Select from '../../components/Select/index'

import './styles.css'
import { isOptionalChain } from 'typescript';

function FormVisit() {

  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const [contact, setContact] = useState('')
  const [secondContact, setSecondContact] = useState('')
  const [visitInformation, setVisitInformation] = useState([
    { equipamentType:'', equipamentModel: '', problem: '' }
  ])

  function newVisitInformationItem(){
    setVisitInformation([
      ...visitInformation,
      { equipamentType:'', equipamentModel: '', problem: '' }
    ])
  }

  function setvisitInformationsValue(position: number, field: string, value: string){
    const updatedVisitInformation = visitInformation.map((visitInf, index) => {
      if(position === index){
        return { ...visitInf, [field]: value};
      }

      return visitInf;
    })
    setVisitInformation(updatedVisitInformation);
  }

  const equipamentOptions = [
    {value:'ar-condicionado', label:'ar-condicionado'},
    {value:'freezer', label:'freezer'},
    {value:'geladeira', label:'geladeira'},
    {value:'maquina-de-lavar', label:'maquina-de-lavar'},
    {value:'vertical ', label:'vertical '},
    {value:'outro', label:'outro'},
  ] 

  var url = '';

  return (
    <div className='App'>
      <Title title='Triangulo' src={url}/>

      <form>
        <Input 
          name='name' 
          type='text' 
          label='Nome do Cliente' 
          value={name}
          onChange={e => {setName(e.target.value)}}
        />

        <Input 
          name='adress' 
          type='text' 
          label='Endereço da visita' 
          value={adress}
          onChange={e => {setAdress(e.target.value)}}
        />

        <Input 
          name='contact'
          type='text' 
          label='Contato' 
          value={contact}
          onChange={e => {setContact(e.target.value)}}
        />

        <Input 
          name='secondContact' 
          type='text' 
          label='Contato opcional' 
          value={secondContact}
          onChange={e => {setSecondContact(e.target.value)}}
        />
        
        <label>Informações sobre equipamentos</label>
        <button type='button' onClick={newVisitInformationItem}>Adicionar equipamento</button>

        {visitInformation.map((visitInf, index) => {
          return (

            <div key={visitInf.equipamentModel+visitInf.equipamentType}>

              <Select 
                name='equipamentType' 
                label='Equipamento' 
                options={equipamentOptions}
                value={visitInf.equipamentType}
                onChange={e => setvisitInformationsValue(index, 'equipamentType', e.target.value)}
              />

              <Input 
                name='equipamentModel' 
                type='text' 
                label='Modelo do equipamento'
                value={visitInf.equipamentModel}
                onChange={e => setvisitInformationsValue(index, 'equipamentModel', e.target.value)}
              />

              <Input 
                name='problem' 
                type='text' 
                label='Problema detectado' 
                value={visitInf.problem}
                onChange={e => setvisitInformationsValue(index, 'problem', e.target.value)}
              />

            </div>
          )
        })}
          
        
        {/* <ButtonNext name='Cadastrar visita' type='submit'/> */}
      </form>
    </div>
  );
}

export default FormVisit;

import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api'

import Input from '../../components/input';
import Title from '../../components/title';
import Select from '../../components/selected'

import './styles.css'

function FormVisit() {

  const goBack = useHistory()

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

  function visitInformationCheck(){
    visitInformation.forEach((visitInf, index) =>{
      if (visitInf.equipamentType === '' && visitInf.equipamentModel === '' && visitInf.problem === ''){
        if(visitInformation.length > 1)
          visitInformation.splice(index, 1)
      }
    })
  }

  function handlerSubmit(e: FormEvent) {
    e.preventDefault()

    visitInformationCheck();

    var visitInformationValidation = false;

    visitInformation.forEach(visitInf => {
      if (visitInf.equipamentType === '' || visitInf.equipamentModel === '' || visitInf.problem === ''){
        visitInformationValidation = true;
      }
    })
  
    if (name === '' || adress === '' || contact=== ''){
      alert('preencha todos os dados do cliente')
    }
    else if(visitInformationValidation){
      alert('preencha todos os dados do equipamento' )
    }
    else{

      api.post('visit', {
        name,
        adress,
        contact,
        secondContact,
        visitInformation
      }).then(() => {
        alert('Visita cadastrada com sucesso!');

        goBack.push('/');
      }).catch(() => {
        alert('Ocorreu algum erro, tente de novo em 2 minutos!');
      });
    } 
  }

  return (
    <div className='App'>
      <Title title='Triangulo'/>

      <form onSubmit={handlerSubmit}>

        <fieldset>

          <legend className='legend'>Informações sobre cliente</legend>

          <div className="clientData">
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
          </div>

        </fieldset>
        <fieldset>
      
          <legend className='legend' >
            Informações sobre equipamentos
            <button type='button' className='button-addItem' onClick={newVisitInformationItem}>
              <FiPlus size={24} color='#000000'/>Adicionar equipamento
            </button>
          </legend>

          {visitInformation.map((visitInf, index) => {
            return (
              
              <div key={index} className='equipaments'>

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
        </fieldset>
        
        <footer>
          <button type='submit' className='submit'>Cadastrar Visita</button>
        </footer>
      </form>
    </div>
  );
}

export default FormVisit;

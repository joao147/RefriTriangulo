import React, { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';

import StorageContext from '../../context/context';

import api from '../../services/api'

import Input from '../../components/input';
import Title from '../../components/title';
import Select from '../../components/selected'

import './styles.css'

function FormVisit() {

  const { setIsValid, token } = useContext(StorageContext);

  const history = useHistory();

  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [adress, setAdress] = useState('');
  const [contact, setContact] = useState('');
  const [secondContact, setSecondContact] = useState('');
  const [technician, setTechnician] = useState('');
  const [visitInformation, setVisitInformation] = useState([
    { equipamentType:'', equipamentBrand:'', equipamentModel: '', equipamentSerie: '', problem: '' }
  ]);

  function newVisitInformationItem(){
    setVisitInformation([
      ...visitInformation,
      { equipamentType:'', equipamentBrand:'', equipamentModel: '', equipamentSerie: '', problem: '' }
    ]);
  }

  function setvisitInformationsValue(position, field, value){
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
      if ( visitInf.equipamentType === '' && visitInf.equipamentBrand === '' && 
      visitInf.equipamentModel === '' && visitInf.equipamentSerie === '' && visitInf.problem === '')
      {
        if(visitInformation.length > 1)
          visitInformation.splice(index, 1);
      }
    })
  }

  const handlerDocument = useCallback((e) => {
    
    let value = e.currentTarget.value;

    if(value.length <= 14){
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/,"$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    }else if(value.length > 14){
      value = value.replace(/\D/g,"")
      value = value.replace(/^(\d{2})(\d)/,"$1.$2")
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
      value = value.replace(/\.(\d{3})(\d)/,".$1/$2")
      value = value.replace(/(\d{4})(\d)/,"$1-$2")
  }

    setDocument(value);
  },[])

  const handlerContact = useCallback((e) => {
    
    let value = e.currentTarget.value;

    if(value.length <= 10){
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{5})(\d)/,"$1-$2");
    }else if(value.length > 10){
      value = value.replace(/\D/g,"")
      value = value.replace(/^(\d{2})(\d)/,"($1) $2")
      value = value.replace(/(\d{5})(\d)/,"$1-$2");
  }

    setContact(value);
  },[])

  const handlerSecondContact = useCallback((e) => {
    
    let value = e.currentTarget.value;

    if(value.length <= 10){
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{5})(\d)/,"$1-$2");
    }else if(value.length > 10){
      value = value.replace(/\D/g,"")
      value = value.replace(/^(\d{2})(\d)/,"($1) $2")
      value = value.replace(/(\d{5})(\d)/,"$1-$2");
  }

    setSecondContact(value);
  },[])

  function handlerSubmit(e) {
    e.preventDefault()

    visitInformationCheck();

    var visitInformationValidation = false;

    visitInformation.forEach(visitInf => {
      if (visitInf.equipamentType === '' || visitInf.equipamentBrand === '' || visitInf.equipamentModel === '' || visitInf.problem === ''){
        visitInformationValidation = true;
      }
    })
  
    if (name === '' || document === '' || adress === '' || contact === ''){
      alert('preencha todos os dados do cliente');
    }else if(technician === ''){
      alert('preencha o nome do tecnico' );
    }else if(visitInformationValidation){
      alert('preencha todos os dados do equipamento' );
    }
    else{

      api.post('visit', {
        name,
        document,
        adress,
        contact,
        secondContact,
        technician,
        visitInformation
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        if(res.data === false){
          setIsValid(false);
          history.push('/login');
        }else{
          alert('Visita cadastrada com sucesso!');
          history.push('/');
        }
      }).catch(() => {
        alert('Ocorreu um erro no cadastro, tentei novamente em 2 minutos!');
      });
    } 
  }

  return (
    <div className='formVisit'>
      <Title title='Triangulo'/>

      <form onSubmit={handlerSubmit}>

        <fieldset>

          <legend className='legend'>Informações sobre cliente</legend>

          <div className='clientData'>
            <Input 
              name='name' 
              type='text' 
              label='Nome do Cliente' 
              value={name}
              onChange={e => {setName(e.target.value)}}
            />

            <Input 
              name='document' 
              type='text' 
              label='CPF/CNPJ'
              maxLength={18}
              onKeyUp={handlerDocument}
              value={document}
              onChange={e => {setDocument(e.target.value)}}
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
              maxLength={15}
              onKeyUp={handlerContact}
              value={contact}
              onChange={e => {setContact(e.target.value)}}
            />

            <Input 
              name='secondContact' 
              type='text' 
              label='Contato opcional' 
              maxLength={15}
              onKeyUp={handlerSecondContact}
              value={secondContact}
              onChange={e => {setSecondContact(e.target.value)}}
            />

            <Input 
              name='technician' 
              type='text' 
              label='Nome do Tecnico' 
              value={technician}
              onChange={e => {setTechnician(e.target.value)}}
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
                  name='equipamentBrand' 
                  type='text' 
                  label='Marca do equipamento'
                  value={visitInf.equipamentBrand}
                  onChange={e => setvisitInformationsValue(index, 'equipamentBrand', e.target.value)}
                />

                <Input 
                  name='equipamentModel' 
                  type='text' 
                  label='Modelo do equipamento'
                  value={visitInf.equipamentModel}
                  onChange={e => setvisitInformationsValue(index, 'equipamentModel', e.target.value)}
                />

                <Input 
                  name='equipamentSerie' 
                  type='text' 
                  label='Serie/Padrão do equipamento'
                  value={visitInf.equipamentSerie}
                  onChange={e => setvisitInformationsValue(index, 'equipamentSerie', e.target.value)}
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

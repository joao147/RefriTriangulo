import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api';

import Input from '../../components/input';
import Select from '../../components/selected'
import Title from '../../components/title';

import './style.css';

const FormPostVisit = () => {

  const [material, setMaterial] = useState([
    {material: '', materialPrice: 0, guarantee: ''}
  ]);
  const [laborPrice, setLaborPrice] = useState(0);
  const visitId = Number(window.localStorage.getItem('id'));

  const guaranteeOptions =[
    {value:'0 meses', label:'0 meses'},
    {value:'3 meses', label:'3 meses'},
    {value:'6 meses', label:'6 meses'},
    {value:'12 meses ', label:'12 meses '},
]

  const goBack = useHistory();

  function newMaterialItem(){
    setMaterial([
      ...material,
      {material: '', materialPrice: 0, guarantee: ''}
    ]) 
  }

  function setMaterialValue(position: number, field: string, value: string){
    const updatedMaterial = material.map((material, index) => {
      if(position === index){
        return { ...material, [field]: value};
      }
      return material;
    })
    setMaterial(updatedMaterial);
  }

  function materialCheck(){
    material.forEach((materialItem, index) =>{
      if (materialItem.material === '' && materialItem.materialPrice === 0 && materialItem.guarantee === ''){
        if(material.length > 1)
          material.splice(index, 1)
      }
    })
  }

  function handlerSubmit(e: FormEvent){
    e.preventDefault();

    materialCheck()

    var materialValidation = false

    material.forEach((material, index)=>{
      if(material.material === '' || material.guarantee === ''){
          materialValidation = true;
      }
    })
    
    if(laborPrice === 0){
      alert('Preencha o preço da mão-de-obra');
    }else if(materialValidation){
      alert('Preencha os dados sobre o(s) material(is)');
    }else{
      
      api.post('post_visit', {
        material,
        laborPrice,
        visitId
      }).then(()=>{
        alert('Cadastro da visita concluida');
        goBack.push('/');
      }).catch(()=>{
        alert('Ocorreu um erro no cadastro, tentei novamente em 2 minutos!');
      })
    }
  }

  return (
    <div className="formPostVisit">
      <Title title='Triangulo' to={`/visit/0`}/>

      <form onSubmit={handlerSubmit}>

        <fieldset>

          <div className="clientData">

            <Input 
              className='number'
              name='laborPrice' 
              type='number'
              label='Preço da mão-de-obra'
              value={laborPrice}
              onChange={e => {setLaborPrice(Number(e.target.value))}}
            />

          </div>
        </fieldset>

        <fieldset>
          <legend className='legend' >
            Informações sobre material
            <button type='button' className='button-addItem' onClick={newMaterialItem}>
              <FiPlus size={24} color='#000000'/>Adicionar material
            </button>
          </legend>

          {material.map((material, index) => {
            return (
              
              <div key={index} className='materials'>

                <Input 
                  name='material'
                  type='text'
                  label='Material' 
                  value={material.material}
                  onChange={e => setMaterialValue(index, 'material', e.target.value)}
                />

                <Input 
                  className='number'
                  name='materialPrice' 
                  type='number' 
                  label='Preço do material'
                  value={material.materialPrice}
                  onChange={e => setMaterialValue(index, 'materialPrice', e.target.value)}
                />

                <Select 
                  name='guarantee' 
                  label='Guarantia' 
                  options={guaranteeOptions}
                  value={material.guarantee}
                  onChange={e => setMaterialValue(index, 'guarantee', e.target.value)}
                />

              </div>
            )
          })}
        </fieldset>
        
        <footer>
          <button type='submit' className='submit'>Concluir Visita</button>
        </footer>
      </form>
      
    </div>
  )
}

export default FormPostVisit;

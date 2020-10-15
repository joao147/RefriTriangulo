import React from 'react';

import ButtonNext from '../../components/buttonNext';
import Input from '../../components/input';
import Title from '../../components/title';

import './styles.css'

function FormVisit() {

  var url = "https://scontent.fppb1-1.fna.fbcdn.net/v/t1.0-9/118357867_1021000901653779_1535386634564165029_n.png?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=YEVmr2q7iVsAX9ihTG8&_nc_ht=scontent.fppb1-1.fna&oh=c8916b4d40633022cb4e78b045bb2034&oe=5F9AE25A";

  return (
    <div className="App">
      <Title title="Triangulo" src={url}/>
      <form>
        <Input name="clientName" type="text" label="Nome do Cliente"/>
        <Input name="adress" type="text" label="Endereço da visita"/>
        <Input name="" type="" label="Contato"/>
        <Input name="" type="" label="d"/>
        <Input name="" type="" label="c"/>

        <ButtonNext name="Cadastrar visita" type="submit"/>
      </form>
    </div>
  );
}

export default FormVisit;

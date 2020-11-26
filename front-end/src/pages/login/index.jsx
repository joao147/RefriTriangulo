import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import StorageContext from '../../context/context';

import api from '../../services/api'

import Input from '../../components/input';
import Title from '../../components/title';

import './style.css'

const Login = () => {

  const { setToken, setIsValid, isValid } = useContext(StorageContext);

  const history = useHistory()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlerLogin(){
    if(email !== '' && password !== ''){
      api.get('/login', {auth:{username: email, password: password}})
      .then((res) => {

        if(res.data !== false){
          setToken(res.data.token);
        
          setIsValid(true);

          history.push('/')
        }else {
          setPassword('')
          alert('email ou senha inválido!')
        }
      })
      .catch((error) => {
        setIsValid(false);

        alert('email ou senha inválido!')
      })
    }else alert('Insira email ou/e senha!')
  }

  if(isValid === true) {
    history.push('/')
  }

  return (
    <div className="login-page">
      <Title title='Triangulo' goback={false}/>
      <div className="helper">
        <Input 
          name='email' 
          label='Email' 
          type='email' 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          name='password' 
          label='Senha' 
          type='password' 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          />

        <button type='button' className='but' onClick={handlerLogin}>Entrar</button>
      </div>
    </div>
  )
}

export default Login;

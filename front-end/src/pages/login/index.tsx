import React, { useState } from 'react'

import api from '../../services/api'

import Input from '../../components/input';

import './style.css'
import Title from '../../components/title';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlerLogin(){
    if(email !== '' && password !== ''){
      api.get('/login', {auth:{username: email, password: password}})
      .then(({ data: {token}}) => {
        
      })
      .catch((error) => {
        console.log(error)
      })
    }
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

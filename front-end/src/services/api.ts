  
import axios from 'axios';

const api = axios.create({
  baseURL:'http://localhost:3333',
  headers:{
    Authorization: ''
  }
})

export default api;

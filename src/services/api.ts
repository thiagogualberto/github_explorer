import axios from 'axios';

// Criar conexão a api externa
const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export default api;

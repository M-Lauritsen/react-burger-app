import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-1332a.firebaseio.com/',
});

export default instance;

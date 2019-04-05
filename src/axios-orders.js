import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-d5be8.firebaseio.com/'
});

export default instance;

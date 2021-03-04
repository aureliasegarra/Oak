import axios from 'axios';

export default axios.create({
  baseURL: 'https://oakapi.herokuapp.com/api/',
  timeout: 10000,
});

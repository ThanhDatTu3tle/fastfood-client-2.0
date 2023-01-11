import axios from 'axios';

const URL = 'http://localhost:5000/'

export const fetchCategory = () => axios.get(`${URL}category`)

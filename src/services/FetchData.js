/* eslint-disable max-len */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.covid19tracking.narrativa.com/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const day = today.getDate() - 1;

const currentDate = `${year}-${month}-${day}`;

// const currentDate = `${today.getFullYear()}-${(`0${today.getMonth() + 1}`).slice(-2)}-${(`0${today.getDate() - 1}`).slice(-2)}`;

const fetchData = () => api.get(`api/${currentDate}`);

export default fetchData;

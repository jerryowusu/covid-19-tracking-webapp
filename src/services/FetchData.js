import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.covid19tracking.narrativa.com/api/',
  headers: {
    'Content-type': 'application/json',
  },
});


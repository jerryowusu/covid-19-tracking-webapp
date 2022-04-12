import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.covid19tracking.narrativa.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});

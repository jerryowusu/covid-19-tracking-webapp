import http from '../http-common';

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const day = today.getDate() - 1;

const currentDate = `${year}-${month}-${day}`;

const getData = () => http.get(`/${currentDate}`);

export default getData;

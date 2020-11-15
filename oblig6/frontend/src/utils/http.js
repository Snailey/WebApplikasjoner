import Axios from 'axios';

const http = Axios.create({
  baseURL: `http://localhost:5000/`,
});

export default http;

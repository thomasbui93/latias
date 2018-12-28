import axios from 'axios';
import HTTP from '../constants/core';

export default axios.create({
  baseURL: HTTP.baseUrl,
  headers: {
    'x-token': sessionStorage.getItem('x-token'),
  },
});

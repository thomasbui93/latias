import axios from 'axios';
import HTTP from '../constants/core';
import auth from '../constants/auth';

export default axios.create({
  baseURL: HTTP.baseUrl,
  headers: {
    'x-token': sessionStorage.getItem(auth.token),
  },
});

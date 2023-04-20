import Axios from 'axios';
import {API_BASE_URL} from '../config';
import {localStorage} from '../components/AppWrapper';

export const axiosClient = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getString('token');

if (token) {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}

axiosClient.interceptors.response.use(
  response => response,

  async config => {
    if (config?.response?.status === 401) {
      console.log('401 :>> ', 401);
      axiosClient.defaults.headers.common.Authorization = '';
    }
    if (config?.response?.status === 404) {
      console.log('404 :>> ', 404);
    }
    return Promise.reject(config);
  },
);

export const paramsSerializer = (parameters: {[key: string]: any}) => {
  const items = Object.keys(parameters).map(key => {
    const value = parameters[key];
    if (Array.isArray(value)) {
      return value.map(v => `${key}=${v}`);
    }
    return `${key}=${value}`;
  });

  return items.flat().join('&');
};

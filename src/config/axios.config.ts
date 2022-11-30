import axios, { CreateAxiosDefaults } from 'axios';
import { BASE_URL } from '../common/variables';

const axiosConfig = {
  baseURL: BASE_URL,
} as CreateAxiosDefaults<any>;

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err.response.data.error)
);
export default instance;

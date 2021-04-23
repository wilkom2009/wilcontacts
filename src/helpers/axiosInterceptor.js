import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from '../config/env';
import {navigate} from '../navigations/SideMenus/RootNavigator';
import {LOGOUT} from '../constants/routeNames';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    //navigate(CONTACT_CREATE);
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  errors => {
    return Promise.reject(errors);
  },
);

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  error => {
    if (!error.response) {
      new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 403) {
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;

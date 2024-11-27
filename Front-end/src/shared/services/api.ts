import axios, { AxiosInstance } from 'axios';

type SignOut = () => void;

type APIInstanceProps = {
    registerInterceptTokenManager: (signOut: SignOut) => () => void;
  } & AxiosInstance;
  
export const api = axios.create({
baseURL: 'http://54.162.187.188:5000/api/',
headers: {
    'Content-Type': 'application/json',
},
}) as APIInstanceProps;
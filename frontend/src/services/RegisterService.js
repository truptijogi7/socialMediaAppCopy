import axios from 'axios';

const baseURL = 'http://localhost:8800/api/';

export async function createUser(data) {
  return axios.post(`${baseURL}auth/register`, data);
}

export async function verifyToken() {
  return axios.post(`${baseURL}auth/verify-token`, { token: sessionStorage.getItem('token') });
}

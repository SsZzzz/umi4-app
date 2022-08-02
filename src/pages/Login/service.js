import axios from 'axios';

function getGraphicVerificationCode(params) {
  return axios.get('/api/v1/index/getGraphicVerificationCode', { params });
}

function login(data) {
  return axios.post('/api/v1/index/login', data);
}

export default { getGraphicVerificationCode, login };

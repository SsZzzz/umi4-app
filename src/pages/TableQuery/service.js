import axios from 'axios';

function queryUserList(params) {
  // 变量的转换统一放到 service 里处理
  params.date = params.date && params.date.format('YYYY-MM-DD');
  return axios.get('/api/v1/queryUserList', { params });
}

export default { queryUserList };

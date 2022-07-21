import { request } from 'umi';

function queryUserList(params) {
  return request('/api/v1/queryUserList', { params });
}

export default { queryUserList };

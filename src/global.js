import { message } from 'antd';
import axios from 'axios';

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    const { data, success, message: messageText } = response?.data || {};
    if (success) {
      // 没有数据返回就代表它是增删改,增删改即使请求成功也返回消息告知用户
      if (!data) message.success(messageText);
      return response?.data?.data;
    }
    message.error(messageText);
    return Promise.reject(new Error(messageText));
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error);
  },
);

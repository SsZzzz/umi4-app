import { message } from 'antd';
// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  return { name: '@umijs/max' };
}

export const request = {
  errorConfig: {
    // 错误抛出
    errorThrower: (res) => {
      const { success, data, message: messageText } = res;
      if (!success) {
        const error = new Error(messageText);
        error.name = 'BizError';
        throw error; // 抛出自制的错误
      } else {
        // 没有数据返回就代表它是增删改,增删改即使请求成功也返回消息告知用户
        if (!data) message.success(messageText);
      }
    },
    // 错误接收及处理
    errorHandler: (error, opts) => {
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === 'BizError') {
        message.error(error.message);
      } else if (error.response) {
        // Axios 的错误
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        message.error('Response status:', error.response.status);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        message.error('None response! Please retry.');
      } else {
        // 发送请求时出了点问题
        message.error('Request error, please retry.');
      }
    },
  },
  // 直接返回 response 中的 data
  transformResponse: [(data) => JSON.parse(data).data],
};

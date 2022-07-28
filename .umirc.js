import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: '/base', // 路由前缀
  title: '政企研发后台模板', // 页面标题
  hash: true,
  antd: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  model: {},
  initialState: {},
  // 使用 umi 内部基于 axios 的请求
  request: {},
  // 页面一定要设置 title
  routes: [
    {
      title: '登录页',
      path: '/login',
      component: './Login',
    },
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          title: '表格查询',
          path: '/tableQuery',
          component: './TableQuery',
        },
        {
          title: '三级导航 2',
          path: '/option2',
          component: './Option2',
        },
        {
          title: '三级导航 3',
          path: '/option3',
          component: './Option3',
        },
        {
          title: '404',
          path: '*',
          component: './404',
        },
      ],
    },
  ],
  theme: {
    '@primary-color': '#2855F0', // 全局主色
    '@font-size-base': '14px', // 主字号
  },
  npmClient: 'pnpm',
});

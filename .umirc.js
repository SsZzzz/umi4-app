import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: '/base', // 路由前缀
  title: 'title', // 页面标题
  // favicon: '/rocket.png', // 标签页图标
  hash: true,
  antd: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'yarn',
});

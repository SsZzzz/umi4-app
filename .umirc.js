import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: '/base', // 路由前缀
  title: 'title', // 页面标题
  // favicon: '/rocket.png', // 标签页图标
  hash: true,
  antd: {},
  model: {},
  initialState: {},
  // 使用 umi 内部基于 axios 的请求
  request: {},
  // 页面一定要设置 title
  routes: [
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
          title: 'option2',
          path: '/option2',
          component: './Option2',
        },
        {
          title: 'option3',
          path: '/option3',
          component: './Option3',
        },
      ],
    },
  ],
  npmClient: 'yarn',
});

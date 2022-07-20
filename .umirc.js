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
  // 页面一定要设置 title
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          title: 'option1',
          path: '/option1',
          component: './Option1',
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

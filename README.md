# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)

### 1.安装依赖

推荐使用 pnpm，首先安装 pnpm，推荐使用 homebrew 安装，也可用其他方式，详情请看文档 [pnpm 文档](https://pnpm.io/zh/installation)

安装完成后，执行 `pnpm i` 即可。

### 2.执行

安装完依赖后，执行 `pnpm start` 或者 `pnpm dev` 命令。

### 3.开发规范

本项目有严格的代码校验，包括 `eslint`，`stylelint`，`commit message lint`，开发前最好安装好对应的插件，`ESLint`，`Stylelint`，`Prettier`，以免在提交的时候代码校验不通过，导致需修改大量的代码。

commit message 格式如下所示

- feat: 新增功能。
- fix: 修复 bug。
- perf: 代码优化。
- docs: 文档相关的改动。
- style: 对代码的格式化改动，代码逻辑并未产生任何变化。
- test: 新增或修改测试用例。
- refactor: 重构代码或其他优化举措。
- chore: 项目工程方面的改动，代码逻辑并未产生任何变化。

### 4.目录结构说明

mock: 本地 mock 文件，具体怎么写参考 userAPI.js

src

​ -.umi: 不要动它

​ -layout: 项目公用的布局，如顶部 header 和侧边导航栏

​ -models: 全局的公用数据，你可以在任何组件获取到

​ -pages: 你的页面应该写在这里

​ -app.js: 运行时配置

​ -global.less: 全局的样式

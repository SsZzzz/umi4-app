import { Button } from 'antd';
import { history } from 'umi';

export default () => {
  return (
    <div>
      <div>三级导航 2</div>
      {/* 路由跳转用 history.push,不要用 useNavigate,用 useNavigate 的话路由变化会导致组件重渲染,即使该页面并未展示,这个无法优化 */}
      <Button type="primary" onClick={() => history.push('/option3')}>
        跳转到三级导航 3
      </Button>
    </div>
  );
};

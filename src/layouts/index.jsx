import { Layout } from 'antd';
import { Outlet } from 'umi';
import Header from './components/Header';
import Sider from './components/Sider';
import styles from './index.less';

const { Content } = Layout;

export default () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Sider />
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};

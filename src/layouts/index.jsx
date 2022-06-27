import { Layout } from 'antd';
import { Outlet } from 'umi';
import Header from './components/Header';
import Sider from './components/Sider';
import styles from './index.less';

const { Content } = Layout;

function LayoutComp() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Sider />
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
}

export default LayoutComp;

import { Layout, Menu } from 'antd';
import styles from '../index.less';

const { Header } = Layout;

const items = ['1', '2', '3'].map((key) => ({
  key,
  label: `大导航${key}`,
}));

export default () => {
  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
      <Menu
        className={styles.headerMenu}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Header>
  );
};

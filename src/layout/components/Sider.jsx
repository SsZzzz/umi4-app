import { RedditOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { history, useLocation } from 'umi';
import styles from '../index.less';

const { Sider } = Layout;

const items = [
  {
    key: 'nav1',
    label: '二级导航',
    icon: <RedditOutlined style={{ fontSize: 18 }} />,
    children: [
      { key: '/option1', label: '三级导航1' },
      { key: '/option2', label: '三级导航2' },
      { key: '/option3', label: '三级导航3' },
    ],
  },
];

export default () => {
  const { pathname } = useLocation();

  function handleSelect({ key }) {
    history.push(key);
  }

  return (
    <Sider width={200} className={styles.sider}>
      <Menu
        className={styles.menu}
        mode="inline"
        items={items}
        defaultOpenKeys={['nav1']}
        selectedKeys={[pathname]}
        onSelect={handleSelect}
      />
    </Sider>
  );
};

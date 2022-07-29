import { TableFile } from '@icon-park/react';
import { Layout, Menu } from 'antd';
import { history, useLocation } from 'umi';
import styles from '../index.less';

const { Sider } = Layout;

const items = [
  {
    key: '/tableQuery',
    label: '表格查询',
    icon: <TableFile size="18" />,
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
        defaultOpenKeys={['nav2']}
        selectedKeys={[pathname]}
        onSelect={handleSelect}
      />
    </Sider>
  );
};

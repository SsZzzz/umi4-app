import NotFound from '@/pages/404';
import { Tabs } from 'antd';
import { history, useLocation, useModel } from 'umi';
import styles from '../index.less';
import PureComponent from './PureComponent';

const { TabPane } = Tabs;

export default () => {
  const { pathname } = useLocation();
  const { tabs, setTabs } = useModel('global');

  function handleTabChange(key) {
    history.push(key);
  }

  function handleTabEdit(targetKey) {
    const index = tabs.findIndex((obj) => obj.path === targetKey);
    const newTabs = [...tabs];
    newTabs.splice(index, 1);
    setTabs(newTabs);
    if (targetKey === pathname) {
      //如果删除的tab就是active的话,就跳转到后一个tab,如果删的是最后一个tab,就跳转到前一个tab
      if (index === tabs.length - 1) history.push(newTabs[index - 1].path);
      else history.push(newTabs[index].path);
    }
  }

  return (
    <div className={styles.tabContainer}>
      {tabs.length ? (
        <Tabs
          type="editable-card"
          activeKey={pathname}
          onChange={handleTabChange}
          onEdit={handleTabEdit}
          hideAdd
        >
          {tabs.map(({ path, title, component }) => (
            <TabPane tab={title} key={path} closable={tabs.length > 1}>
              <PureComponent component={component} />
            </TabPane>
          ))}
        </Tabs>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

import Header from './components/Header';
import Sider from './components/Sider';
import Tab from './components/Tab';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Sider />
        <Tab />
      </div>
    </div>
  );
};

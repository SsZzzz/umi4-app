import { useModel } from 'umi';
import styles from './index.less';

export default () => {
  const { name } = useModel('global');

  return <div className={styles.container}>{name}</div>;
};

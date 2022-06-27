import { useModel } from '@umijs/max';
import styles from './index.less';

export default () => {
  const { name } = useModel('global');

  return <div className={styles.container}>{name}</div>;
};

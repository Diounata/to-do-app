import styles from './styles.module.scss';

import { Input } from '../Input';

export function AddTask() {
  return (
    <div className={styles.addTaskContainer}>
      <div></div>

      <Input placeholder="Create a new todo..." />
    </div>
  );
}

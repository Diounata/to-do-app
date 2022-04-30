import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function TaskFooter() {
  const { getItemsAmount, deleteAllDoneTasks } = useTask();

  return (
    <footer className={styles.footerContainer}>
      <div>{getItemsAmount()}</div>

      <button onClick={deleteAllDoneTasks}>Clear Completed</button>
    </footer>
  );
}

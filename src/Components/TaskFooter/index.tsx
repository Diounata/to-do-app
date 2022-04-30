import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function TaskFooter() {
  const { getAmountOfLeftItems, deleteAllDoneTasks } = useTask();

  return (
    <footer className={styles.footerContainer}>
      <div>{getAmountOfLeftItems()}</div>

      <button onClick={deleteAllDoneTasks}>Clear Completed</button>
    </footer>
  );
}

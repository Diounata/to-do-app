import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function TaskFooter() {
  const { getAmountOfLeftItems, deleteDoneTasks } = useTask();

  return (
    <footer className={styles.footerContainer}>
      <div>{getAmountOfLeftItems()}</div>

      <button onClick={deleteDoneTasks}>Clear Completed</button>
    </footer>
  );
}

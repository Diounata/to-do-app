import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function TaskFooter() {
  const { remainingTasks, deleteDoneTasks } = useTask();

  return (
    <footer className={styles.footerContainer}>
      <div>
        {remainingTasks || 'No'} {remainingTasks === 1 ? 'item' : 'items'} left
      </div>

      <button onClick={deleteDoneTasks}>Clear Completed</button>
    </footer>
  );
}

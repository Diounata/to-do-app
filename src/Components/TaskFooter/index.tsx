import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function TaskFooter() {
  const { remainingTasks } = useTask();

  return (
    <footer className={styles.footerContainer}>
      <div>
        {remainingTasks} {remainingTasks === 1 ? 'item' : 'items'} left
      </div>

      <button>Clear Completed</button>
    </footer>
  );
}

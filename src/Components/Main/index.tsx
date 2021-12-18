import styles from './styles.module.scss';

import { AddTask } from '../AddTask';
import { Tasks } from '../Tasks';

export function Main() {
  return (
    <main className={styles.mainContainer}>
      <AddTask />

      <section className={styles.tasksComponent}>
        <Tasks />

        <footer>
          <div>4 items left</div>
          <button>Clear Completed</button>
        </footer>
      </section>
    </main>
  );
}

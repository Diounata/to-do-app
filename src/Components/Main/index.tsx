import styles from './styles.module.scss';

import { AddTask } from '../AddTask';
import { Tasks } from '../Tasks';
import { TaskFooter } from '../TaskFooter';
import { TaskStateFilter } from '../TaskStateFilter';
import { DragAlert } from '../DragAlert';

export function Main() {
  return (
    <main className={styles.mainContainer}>
      <AddTask />

      <section className={styles.tasksComponent}>
        <Tasks />
        <TaskFooter />
      </section>

      <TaskStateFilter />
      <DragAlert />
    </main>
  );
}

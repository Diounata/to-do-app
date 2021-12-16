import { AddTask } from '../AddTask';
import styles from './styles.module.scss';

export function Main() {
  return (
    <main className={styles.mainContainer}>
      <AddTask />
    </main>
  );
}

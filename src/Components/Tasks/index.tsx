import Image from 'next/image';
import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function Tasks() {
  const { tasks, deleteTask } = useTask();

  return (
    <div className={styles.tasksContainer}>
      {tasks.map(({ name, isDone }, key) => (
        <article className={isDone ? styles.selected : ''} key={key}>
          <div>
            {isDone ? <Image src="/icon-check.svg" width="10px" height="10px" alt="Done" /> : <span></span>}
          </div>

          <span title={name}>{name}</span>

          <button onClick={() => deleteTask(key)}>
            <Image src="/icon-cross.svg" width="16px" height="16px" alt="Delete" title="Delete" />
          </button>
        </article>
      ))}
    </div>
  );
}

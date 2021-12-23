import Image from 'next/image';
import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function Tasks() {
  const { deleteTask, toggleTaskSituation, filterTasksBySituation } = useTask();

  const filteredTasks = filterTasksBySituation();

  return (
    <div className={styles.tasksContainer}>
      {filteredTasks.map(({ name, isDone }, key) => (
        <article className={isDone ? styles.selected : ''} key={key}>
          <button onClick={() => toggleTaskSituation(key)} className={styles.toggleButton}>
            {isDone ? <Image src="/icon-check.svg" width="10px" height="10px" alt="Done" /> : <span />}
          </button>

          <span title={name}>{name}</span>

          <button onClick={() => deleteTask(key)} className={styles.deleteButton}>
            <Image src="/icon-cross.svg" width="16px" height="16px" alt="Delete" title="Delete" />
          </button>
        </article>
      ))}
    </div>
  );
}

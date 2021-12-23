import Image from 'next/image';
import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

export function Tasks() {
  const { deleteTask, toggleTaskSituation, filterTasksBySituation } = useTask();

  const filteredTasks = filterTasksBySituation();

  return (
    <div className={styles.tasksContainer}>
      {filteredTasks.map(({ id, name, isDone }) => (
        <article className={isDone ? styles.selected : ''} key={id}>
          <button onClick={() => toggleTaskSituation(id)} className={styles.toggleButton}>
            {isDone ? <Image src="/icon-check.svg" width="10px" height="10px" alt="Done" /> : <span />}
          </button>

          <span title={name}>{name}</span>

          <button onClick={() => deleteTask(id)} className={styles.deleteButton}>
            <Image src="/icon-cross.svg" width="16px" height="16px" alt="Delete" title="Delete" />
          </button>
        </article>
      ))}
    </div>
  );
}

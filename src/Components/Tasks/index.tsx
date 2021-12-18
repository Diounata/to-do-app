import Image from 'next/image';
import styles from './styles.module.scss';

export function Tasks() {
  const tasks = [
    {
      name: 'Remake to-do-list projecta',
      isDone: true,
    },
    {
      name: 'Do homework',
      isDone: true,
    },
    {
      name: 'Read for 1 hour',
      isDone: false,
    },
    {
      name: 'Code',
      isDone: false,
    },
  ];

  return (
    <div className={styles.tasksContainer}>
      {tasks.map(({ name, isDone }, key) => (
        <article key={key}>
          <div className={isDone ? styles.selected : ''}>
            {isDone && <Image src="/icon-check.svg" width="10px" height="10px" alt="Done" />}
          </div>

          <span title={name}>{name}</span>

          <button>
            <Image src="/icon-cross.svg" width="16px" height="16px" alt="Delete" title="Delete" />
          </button>
        </article>
      ))}
    </div>
  );
}

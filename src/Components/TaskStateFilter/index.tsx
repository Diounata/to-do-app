import styles from './styles.module.scss';

export function TaskStateFilter() {
  return (
    <section className={styles.container}>
      <button className={styles.selected}>All</button>
      <button>Active</button>
      <button>Completed</button>
    </section>
  );
}

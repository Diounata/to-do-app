import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

type TasksFilterProps = 'All' | 'Active' | 'Completed';

export function TaskStateFilter() {
  const { tasksFilter, updateTasksFilter } = useTask();

  const filters: TasksFilterProps[] = ['All', 'Active', 'Completed'];

  return (
    <section className={styles.container}>
      {filters.map((filter, key) => (
        <button
          className={filter === tasksFilter ? styles.selected : ''}
          onClick={() => updateTasksFilter(filter)}
          key={key}
        >
          {filter}
        </button>
      ))}
    </section>
  );
}

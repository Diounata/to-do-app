import { useContext } from 'react';
import { TaskContext } from '../../Contexts/TaskContext';
import styles from '../../styles/modules/TodoList.module.scss';

import NoTask from './NoTask';
import TaskContent from './TaskContent';

export default function TodoList() {
    const { hasTask } = useContext(TaskContext);

    return (
        <main className={styles.todoListContainer}>
            <table>
                <caption> To-do list </caption>

                {hasTask ? <TaskContent /> : <NoTask />}
            </table>
        </main>
    );
}

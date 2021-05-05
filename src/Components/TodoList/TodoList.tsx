import { useState } from 'react';
import styles from '../../styles/modules/TodoList.module.scss';

import NoTask from './NoTask';
import TaskContent from './TaskContent';

export default function TodoList() {
    const [hasTask, setHasTask] = useState(true);

    return (
        <main className={styles.todoListContainer}>
            <table>
                <caption> To-do list </caption>

                {hasTask ? <TaskContent /> : <NoTask />}
            </table>
        </main>
    );
}

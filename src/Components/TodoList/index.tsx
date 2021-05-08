import { useContext } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import { TaskContext } from '../../Contexts/TaskContext';
import styles from '../../styles/modules/TodoList/TodoList.module.scss';
import AddedTaskMessage from '../Modal/AddedTaskMessage';

import NoTask from './NoTask';
import TaskContent from './TaskContent';

export default function TodoList() {
    const { hasTask } = useContext(TaskContext);
    const { isTaskAdded } = useContext(ModalContext);

    return (
        <main className={styles.todoListContainer}>
            <table>
                <caption> To-do list </caption>

                {hasTask ? <TaskContent /> : <NoTask />}
                {isTaskAdded && <AddedTaskMessage />}
            </table>
        </main>
    );
}

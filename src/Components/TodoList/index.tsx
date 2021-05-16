import styles from '../../styles/modules/TodoList/TodoList.module.scss';

import AddedTaskMessage from '../AddTaskModal/AddedTaskMessage';
import NoTask from './NoTask';
import TaskContent from './TaskContent';

import { useTask } from '../../Contexts/TaskContext';
import { useModal } from '../../Contexts/ModalContext';

export default function TodoList() {
    const { hasTask } = useTask();
    const { isTaskAdded } = useModal();

    return (
        <main className={styles.todoListContainer}>
            <table>
                <caption> To-do list </caption>

                {hasTask ? <TaskContent /> : <NoTask />}
            </table>

            {isTaskAdded && <AddedTaskMessage />}
        </main>
    );
}

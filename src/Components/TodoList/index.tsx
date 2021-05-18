import styles from '../../styles/modules/TodoList/TodoList.module.scss';

import AddedTaskMessage from '../AddTaskModal/AddedTaskMessage';
import NoTask from './NoTask';
import TaskContent from './TaskContent';
import ChangedSettingMessage from '../Settings/ChangedSettingMessage';

import { useTask } from '../../Contexts/TaskContext';
import { useModal } from '../../Contexts/ModalContext';
import { useSettings } from '../../Contexts/SettingsContext';

export default function TodoList() {
    const { hasTask } = useTask();
    const { isTaskAdded } = useModal();
    const { hasSettingChanged } = useSettings();

    return (
        <main className={styles.todoListContainer}>
            <table>
                <caption> To-do list </caption>

                {hasTask ? <TaskContent /> : <NoTask />}
            </table>

            {isTaskAdded && <AddedTaskMessage />}
            {hasSettingChanged && <ChangedSettingMessage />}
        </main>
    );
}

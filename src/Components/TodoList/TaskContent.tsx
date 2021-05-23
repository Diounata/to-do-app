import styles from '../../styles/modules/TodoList/TaskContent.module.scss';

import { useTask } from '../../Contexts/TaskContext';
import { useSettings } from '../../Contexts/SettingsContext';

interface TasksProps {
    text: string;
    isDone: boolean;
}

export default function TaskContent() {
    const { tasks, addDoneTask, deleteTask } = useTask();
    const { isOrderlyTasks, isInvertedTasks } = useSettings();

    const tasksArray = isInvertedTasks
        ? tasks.map(t => t).reverse()
        : tasks.map(t => t)

    return (
        <tbody className={styles.taskContentContainer}>
            {tasksArray.map((task: TasksProps, index: number) => (
                <tr className={task.isDone ? styles.taskDone : ''} key={index}>
                    <td title={task.text}>
                        <p>
                            {isOrderlyTasks ? (
                                <span>
                                    {index + 1}. <span>{task.text}</span>
                                </span>
                            ) : (
                                <span>{task.text}</span>
                            )}
                        </p>
                    </td>

                    <td>
                        <button onClick={() => deleteTask(index)}>
                            <img src='./icons/trash-icon.svg' alt='Delete' />
                        </button>

                        <button onClick={() => addDoneTask(index)}>
                            <span></span>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

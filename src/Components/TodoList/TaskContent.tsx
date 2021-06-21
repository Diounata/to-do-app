import styles from '../../styles/modules/TodoList/TaskContent.module.scss';

import Trash from '../../Icons/Trash';

import { useTask } from '../../Contexts/TaskContext';
import { useSettings } from '../../Contexts/SettingsContext';

interface TasksProps {
    text: string;
    isDone: boolean;
}

export default function TaskContent() {
    const { tasks, addDoneTask, deleteTask } = useTask();
    const { isOrderlyTasks, isInvertedTasks } = useSettings();

    let tasksArray: TasksProps[], indexArray: number[];

    if (isInvertedTasks) {
        tasksArray = tasks.map(t => t).reverse();
        indexArray = tasks.map((t, index: number) => index).reverse();
    } else {
        tasksArray = tasks.map(t => t);
        indexArray = tasks.map((t, index: number) => index);
    }

    return (
        <tbody className={styles.taskContentContainer}>
            {tasksArray.map((task: TasksProps, i: number) => (
                <tr className={task.isDone ? styles.taskDone : ''} key={indexArray[i]}>
                    <td title={task.text}>
                        <p>
                            {isOrderlyTasks ? (
                                <span>
                                    {i + 1}. <span>{task.text}</span>
                                </span>
                            ) : (
                                <span>{task.text}</span>
                            )}
                        </p>
                    </td>

                    <td>
                        <button onClick={() => deleteTask(indexArray[i])}>
                            <Trash />
                        </button>

                        <button onClick={() => addDoneTask(indexArray[i])}>
                            <span></span>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

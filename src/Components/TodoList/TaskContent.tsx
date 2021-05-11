import { useContext } from 'react';
import { TaskContext } from '../../Contexts/TaskContext';
import styles from '../../styles/modules/TodoList/TaskContent.module.scss';

interface TasksProps {
    text: string;
    isDone: boolean;
}

export default function TaskContent() {
    const { tasks, updateTasks, changeHasTask } = useContext(TaskContext);

    function addTaskDone(taskId: number) {
        let changedTask: TasksProps[] = tasks.filter(
            (t, index) => index === taskId
        );
        changedTask[0].isDone
            ? (changedTask[0].isDone = false)
            : (changedTask[0].isDone = true);

        const newArray = tasks.map((t, index) =>
            index === taskId ? changedTask[0] : t
        );

        updateTasks(newArray);
    }

    function deleteTask(taskId: number) {
        const newArray = tasks.filter((t, index) => index !== taskId);

        newArray.length === 0 && changeHasTask(false); // Show NoTask component.
        updateTasks(newArray);
    }

    return (
        <tbody className={styles.taskContentContainer}>
            {tasks.map((task: TasksProps, index) => (
                <tr className={task.isDone ? styles.taskDone : ''} key={index}>
                    <td>
                        <p>{task.text}</p>
                    </td>

                    <td>
                        <button onClick={() => deleteTask(index)}>
                            <img src='./icons/trash-icon.svg' alt='Delete' />
                        </button>

                        <button onClick={() => addTaskDone(index)}>
                            <span></span>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

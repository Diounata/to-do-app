import { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/TaskContext';
import styles from '../../styles/modules/TodoList/TaskContent.module.scss';

interface TaskProps {
    text: string;
    id: number;
    isDone: boolean;
}

export default function TaskContent() {
    const { changeHasTask } = useContext(TaskContext);

    const [tasks, setTasks] = useState([
        {
            text: 'Do homework',
            id: 1,
            isDone: true,
        },

        {
            text: 'Develop some code',
            id: 2,
            isDone: false,
        },
    ]);

    function addTaskDone(taskId: number) {
        let changedTask: TaskProps[] = tasks.filter(t => t.id === taskId);
        changedTask[0].isDone
            ? (changedTask[0].isDone = false)
            : (changedTask[0].isDone = true);

        const newArray = tasks.map(t => (t.id === taskId ? changedTask[0] : t));

        setTasks(newArray);
    }

    function deleteTask(taskId: number) {
        const newArray = tasks.filter(t => t.id !== taskId);

        newArray.length === 0 && changeHasTask(false);
        setTasks(newArray);
    }

    return (
        <tbody className={styles.taskContentContainer}>
            {tasks.map((task: TaskProps) => (
                <tr
                    className={task.isDone ? styles.taskDone : ''}
                    key={task.id}
                >
                    <td>
                        <p>{task.text}</p>
                    </td>

                    <td>
                        <button onClick={() => deleteTask(task.id)}>
                            <img src='./icons/trash-icon.svg' alt='Delete' />
                        </button>

                        <button onClick={() => addTaskDone(task.id)}>
                            <span></span>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

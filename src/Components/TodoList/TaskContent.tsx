import styles from '../../styles/modules/TaskContent.module.scss';

interface TaskProps {
    text: string;
    id: number;
    isDone: boolean;
}

export default function TaskContent() {
    const tasks = [
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
    ];

    return (
        <tbody className={styles.taskContentContainer}>
            {tasks.map((task: TaskProps) => (
                <tr className={task.isDone ? styles.taskDone : ''} key={task.id}>
                    <td>
                        <p>{task.text}</p>
                    </td>

                    <td>
                        <button></button>

                        <button>
                            <span></span>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

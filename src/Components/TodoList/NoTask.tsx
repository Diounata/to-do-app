import styles from '../../styles/modules/NoTask.module.scss';

export default function NoTask() {
    return (
        <tbody>
            <tr className={styles.noTaskContainer}>
                <td>
                    <img
                        src='./icons/exclamation-icon.svg'
                        alt='Exclamation icon'
                    />
                    The activities will be here when added.
                </td>
            </tr>
        </tbody>
    );
}

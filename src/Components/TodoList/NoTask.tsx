import styles from '../../styles/modules/TodoList/NoTask.module.scss';

import ExclamationIcon from '../../Icons/ExclamationIcon';

export default function NoTask() {
    return (
        <tbody>
            <tr className={styles.noTaskContainer}>
                <td>
                    <ExclamationIcon />
                    The activities will be here when added.
                </td>
            </tr>
        </tbody>
    );
}

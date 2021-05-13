import Image from 'next/image';
import styles from '../../styles/modules/TodoList/NoTask.module.scss';

export default function NoTask() {
    return (
        <tbody>
            <tr className={styles.noTaskContainer}>
                <td>
                    <Image
                        src='/icons/exclamation-icon.svg'
                        width={30}
                        height={30}
                        alt='Exclamation'
                        className='svg-color'
                    />

                    The activities will be here when added.
                </td>
            </tr>
        </tbody>
    );
}

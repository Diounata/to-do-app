import { useState, useEffect } from 'react';
import styles from '../../styles/modules/AddTaskModal/AddedTaskMessage.module.scss';

import { useModal } from '../../Contexts/ModalContext';
import CheckCircle from '../../Icons/CheckCircle';

export default function AddedTaskMessage() {
    const { changeTaskMessage } = useModal();
    const [display, setDisplay] = useState('flex'); // Possible values: 'flex' | 'none'

    useEffect(() => {
        setTimeout(() => {
            setDisplay('none');
            changeTaskMessage(false);
        }, 3000);
    }, []);

    return (
        <div className={styles.messageContainer} style={{ display: display }}>
            <div>
                <CheckCircle />
                Your task has been added successfully!
            </div>

            <div className={styles.progressBar}></div>
        </div>
    );
}

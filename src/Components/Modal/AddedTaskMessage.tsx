import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import styles from '../../styles/modules/Modal/AddedTaskMessage.module.scss';

export default function AddedTaskMessage() {
    const { changeTaskMessage } = useContext(ModalContext);
    const [display, setDisplay] = useState('flex'); // Possible values: 'flex' | 'none'

    useEffect(() => {
        setTimeout(() => {
            setDisplay('none');
            changeTaskMessage(false);
        }, 3000);
    }, []);

    return (
        <div className={styles.messageContainer} style={{ display: display }}>
            <img src='./icons/check-circle-icon.svg' alt='Check icon' />

            Your task has been added successfully!
        </div>
    );
}

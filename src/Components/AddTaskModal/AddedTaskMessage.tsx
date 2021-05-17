import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/modules/AddTaskModal/AddedTaskMessage.module.scss';

import { useModal } from '../../Contexts/ModalContext';

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
                <Image
                    src='/icons/check-circle-icon.svg'
                    width={16}
                    height={16}
                    alt='Check'
                    className='test'
                />

                Your task has been added successfully!
            </div>

            <div className={styles.progressBar}></div>
        </div>
    );
}

import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import Image from 'next/image';
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
            <Image
                src='/icons/check-circle-icon.svg'
                width={16}
                height={16}
                alt='Check'
                className='test'
            />

            Your task has been added successfully!
        </div>
    );
}

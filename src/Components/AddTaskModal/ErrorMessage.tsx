import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/modules/AddTaskModal/ErrorMessage.module.scss';

interface Props {
    setHasError(value: boolean): void;
}

export default function MessageError({ setHasError }: Props) {
    const [display, setDisplay] = useState('flex'); // Posible values: 'flex' | 'none'

    useEffect(() => {
        setTimeout(() => {
            setDisplay('none');
            setHasError(false);
        }, 3000);
    }, []);

    return (
        <div className={styles.messageContainer} style={{ display: display }}>
            <Image
                src='/icons/error-icon.svg'
                width={18}
                height={18}
                alt='Error'
            />

            The form field is empty.
        </div>
    );
}

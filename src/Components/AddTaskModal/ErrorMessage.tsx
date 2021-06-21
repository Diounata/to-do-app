import { useState, useEffect } from 'react';
import styles from '../../styles/modules/AddTaskModal/ErrorMessage.module.scss';

import ExclamationErrorIcon from '../../Icons/ExclamationErrorIcon';

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
            <div>
                <ExclamationErrorIcon />
                The form field is empty.
            </div>

            <div className={styles.progressBar}></div>
        </div>
    );
}

import { useState, useEffect } from 'react';
import styles from '../../styles/modules/Modal/ErrorMessage.module.scss';

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
            <img src='./icons/error-icon.svg' alt='Error icon' />

            [ERROR] The form field is empty.
        </div>
    );
}

import { useContext } from 'react';
import { ModalContext } from '../Contexts/ModalContext';
import styles from '../styles/modules/Main/AddTaskButton.module.scss';

export default function AddTaskButton() {
    const { changeModalState } = useContext(ModalContext);

    return (
        <footer className={styles.footerContainer}>
            <button type='button' onClick={() => changeModalState(true)}>
                +
            </button>
        </footer>
    );
}

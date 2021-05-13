import { useContext } from 'react';
import gearIcon from './icons/gear';

import { ModalContext } from '../Contexts/ModalContext';
import styles from '../styles/modules/Main/AddTaskButton.module.scss';

export default function AddTaskButton() {
    const { changeModalState } = useContext(ModalContext);

    return (
        <footer className={styles.footerContainer} title='Add task'>
            <button type='button' onClick={() => changeModalState(true)}>
                +
            </button>
        </footer>
    );
}

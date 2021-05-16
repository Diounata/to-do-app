import styles from '../../styles/modules/Main/AddTaskButton.module.scss';

import { useModal } from '../../Contexts/ModalContext';

export default function AddTaskButton() {
    const { changeModalState } = useModal();

    return (
        <footer className={styles.footerContainer} title='Add task'>
            <button type='button' onClick={() => changeModalState(true, 't')}>
                +
            </button>
        </footer>
    );
}

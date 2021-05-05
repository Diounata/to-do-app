import { useContext, useState } from 'react';
import { ModalContext } from '../Contexts/ModalContext';
import styles from '../styles/modules/Modal.module.scss';

export default function Modal() {
    const { isModalOpen, changeModalState } = useContext(ModalContext);
    const [isInputFilled, setIsInputFilled] = useState(false);

    function verifyInput(amount: number): void {
        if (amount === 0) {
            setIsInputFilled(false);
        } else {
            setIsInputFilled(true);
        }
    }

    function addTask() {
        if (isInputFilled) {
            changeModalState();
        } else {
            alert('The input field is empty.');
        }
    }

    return (
        <div
            className={isModalOpen ? styles.modalContainer : styles.modalClosed}
        >
            <div>
                <header>
                    <h1>
                        <img src='./icons/task-icon.svg' /> New task
                    </h1>
                </header>

                <main>
                    <input
                        type='text'
                        placeholder='Task'
                        onChange={e => verifyInput(e.target.value.length)}
                    />
                </main>

                <footer>
                    <button
                        type='submit'
                        className={styles.closeModal}
                        onClick={changeModalState}
                    >
                        <img
                            src='./icons/close-circle-icon.svg'
                            alt='Close icon'
                        />
                        Close
                    </button>
                    <button
                        type='submit'
                        className={styles.addTask}
                        onClick={addTask}
                    >
                        <img
                            src='./icons/add-circle-icon.svg'
                            alt='Add task icon'
                        />
                        Add
                    </button>
                </footer>
            </div>
        </div>
    );
}

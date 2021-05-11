import { useContext, useState, useRef } from 'react';
import { ModalContext } from '../../Contexts/ModalContext';
import { TaskContext } from '../../Contexts/TaskContext';
import styles from '../../styles/modules/Modal/Modal.module.scss';

import MessageError from './ErrorMessage';

interface TasksProps {
    text: string;
    isDone: boolean;
}

export default function Modal() {
    const { isModalOpen, changeModalState, changeTaskMessage } = useContext(ModalContext);
    const { tasks, updateTasks, changeHasTask } = useContext(TaskContext);

    const [isInputFilled, setIsInputFilled] = useState(false);
    const [hasError, setHasError] = useState(false);
    const inputModal = useRef(null);

    function verifyInput(amount: number): void {
        if (amount === 0) {
            setIsInputFilled(false);
        } else {
            setIsInputFilled(true);
        }
    }

    function addTask() {
        if (isInputFilled) {
            let newTask: TasksProps = {
                text: inputModal.current.value,
                isDone: false,
            };

            let newTaskJson = [newTask, ...tasks];

            inputModal.current.value = '';

            updateTasks(newTaskJson);
            changeHasTask(true);
            changeTaskMessage(true);
            setIsInputFilled(false);
            changeModalState(false);
        } else {
            setHasError(true);
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
                        ref={inputModal}
                        onChange={e => verifyInput(e.target.value.length)}
                    />
                </main>

                <footer>
                    <button
                        type='submit'
                        className={styles.closeModal}
                        onClick={() => changeModalState(false)}
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

                {hasError && <MessageError setHasError={setHasError} />}
            </div>
        </div>
    );
}

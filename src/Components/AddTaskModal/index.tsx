import { useState, useRef } from 'react';
import styles from '../../styles/modules/AddTaskModal/Modal.module.scss';

import { useModal } from '../../Contexts/ModalContext';
import { useTask } from '../../Contexts/TaskContext';

import MessageError from './ErrorMessage';
import Clipboard from '../../Icons/Clipboard';
import CloseCircle from '../../Icons/CloseCircle';
import AddCircle from '../../Icons/AddCircle';

interface TasksProps {
    text: string;
    isDone: boolean;
}

export default function Modal() {
    const { isAddTaskOpen, changeModalState, changeTaskMessage } = useModal();
    const { tasks, updateTasks } = useTask();

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
            changeTaskMessage(true);
            setIsInputFilled(false);
            changeModalState(false, 't');
        } else {
            setHasError(true);
        }
    }

    return (
        <div
            className={
                isAddTaskOpen ? styles.modalContainer : styles.modalClosed
            }
        >
            <div>
                <header>
                    <h1>
                        <Clipboard />
                        New task
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
                        onClick={() => changeModalState(false, 't')}
                        title='Close'
                    >
                        <CloseCircle />
                        Close
                    </button>
                    <button
                        type='submit'
                        className={styles.addTask}
                        onClick={addTask}
                        title='Add task'
                    >
                        <AddCircle />
                        Add
                    </button>
                </footer>

                {hasError && <MessageError setHasError={setHasError} />}
            </div>
        </div>
    );
}

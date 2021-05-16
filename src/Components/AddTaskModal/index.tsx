import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/modules/AddTaskModal/Modal.module.scss';

import { useModal } from '../../Contexts/ModalContext';
import { useTask } from '../../Contexts/TaskContext';

import MessageError from './ErrorMessage';

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
                        <Image
                            src='/icons/task-icon.svg'
                            width={22}
                            height={22}
                            alt='Task'
                            className='svg-color'
                        />
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
                        title='Add task'
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

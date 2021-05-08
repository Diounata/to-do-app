import { useContext } from 'react';

import Header from '../Components/Header';
import TodoList from '../Components/TodoList';
import Modal from '../Components/Modal/Modal';
import AddTaskButton from '../Components/AddTaskButton';

import { ModalContextProvider } from '../Contexts/ModalContext';
import { TaskContextProvider } from '../Contexts/TaskContext';

export default function Home() {
    return (
        <ModalContextProvider>
            <div className='container'>
                <Header />

                <TaskContextProvider>
                    <TodoList />
                </TaskContextProvider>
            </div>

            <AddTaskButton />
            <Modal />
        </ModalContextProvider>
    );
}

import Header from '../Components/Header';
import TodoList from '../Components/TodoList';
import AddTaskButton from '../Components/AddTaskButton';
import Modal from '../Components/Modal/Modal';

import { ModalContextProvider } from '../Contexts/ModalContext';
import { TaskContextProvider } from '../Contexts/TaskContext';

export default function Home() {
    return (
        <div className='app dark-theme'>
            <TaskContextProvider>
                <ModalContextProvider>
                    <div className='container'>
                        <Header />
                        <TodoList />
                    </div>

                    <AddTaskButton />
                    <Modal />
                </ModalContextProvider>
            </TaskContextProvider>
        </div>
    );
}

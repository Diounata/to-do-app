import Header from '../Components/Header';
import TodoList from '../Components/TodoList/TodoList';
import Modal from '../Components/Modal';
import AddTaskButton from '../Components/AddTaskButton';
import { ModalContextProvider } from '../Contexts/ModalContext';

export default function Home() {
    return (
        <ModalContextProvider>
            <div className='container'>
                <Header />
                <TodoList />
            </div>

            <Modal />
            <AddTaskButton />
        </ModalContextProvider>
    );
}

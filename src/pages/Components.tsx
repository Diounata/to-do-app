import Header from '../Components/Main/Header';
import TodoList from '../Components/TodoList';
import AddTaskButton from '../Components/Main/AddTaskButton';
import Modal from '../Components/AddTaskModal/index';
import Settings from '../Components/Settings';

import { useSettings } from '../Contexts/SettingsContext';

export default function App() {
    const { isDarkTheme } = useSettings();

    return (
        <div id='app' className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <div className='container'>
                <Header />
                <TodoList />
            </div>

            <AddTaskButton />
            <Modal />
            <Settings />
        </div>
    );
}

import Header from '../Components/Main/Header';
import TodoList from '../Components/TodoList';
import AddTaskButton from '../Components/Main/AddTaskButton';
import Modal from '../Components/AddTaskModal/index';
import Settings from '../Components/Settings';

import { IconContext } from 'react-icons';
import { useSettings } from '../Contexts/SettingsContext';

export default function App() {
    const { isDarkTheme } = useSettings();

    return (
        <IconContext.Provider value={{ color: `${isDarkTheme ? '#e1e1e1' : '#2f3640'}` }}>
            
            <div id='app' className={ isDarkTheme ? 'dark-theme' : 'light-theme' }>
                <div className='container'>
                    <Header />
                    <TodoList />
                </div>

                <AddTaskButton />
                <Modal />
                <Settings />
            </div>
            
        </IconContext.Provider>
    );
}

import App from '../Components/App';

import { SettingsContextProvider } from '../Contexts/SettingsContext';
import { TaskContextProvider } from '../Contexts/TaskContext';
import { ModalContextProvider } from '../Contexts/ModalContext';

export default function Home() {
    return (
        <TaskContextProvider>
            <SettingsContextProvider>
                <ModalContextProvider>
                    <App />
                </ModalContextProvider>
            </SettingsContextProvider>
        </TaskContextProvider>
    );
}

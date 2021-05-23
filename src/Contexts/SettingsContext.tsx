import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

import { useTask } from './TaskContext';

export const SettingsContext = createContext({} as SettingsProps);

interface ContextData {
    children: ReactNode;
}

interface SettingsProps {
    isDarkTheme: boolean;
    isOrderlyTasks: boolean;
    isInvertedTasks: boolean;
    isCautionMessageOn: boolean;
    selectedFunction: number;
    hasSettingChanged: boolean;

    changeConfig(value: boolean, config: string): void;
    changeCautionMessage(value: boolean, numberFunction: number): void;
    changeHasSettingChanged(value: boolean): void;
    deleteDoneTasks(): void;
    deleteAllTasks(): void;
    dismarkAllTasks(): void;
}

export function SettingsContextProvider({ children }: ContextData) {
    const { tasks, updateTasks } = useTask();
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isInvertedTasks, setIsInvertedTasks] = useState(false);
    const [isOrderlyTasks, setIsOrderlyTasks] = useState(false);
    const [isCautionMessageOn, setIsCautionMessageOn] = useState(false);
    const [hasSettingChanged, setHasSettingChanged] = useState(false);

    // -1 = null; 0 = delete done tasks; 1 = delete all tasks; 2 = dismark all tasks.
    const [selectedFunction, setSelectedFunction] = useState(-1);

    function changeCautionMessage(value: boolean, numberFunction: number) {
        setSelectedFunction(numberFunction);
        setIsCautionMessageOn(value);
    }

    function changeConfig(value: boolean, config: string) {
        // 't' = theme; 'o' = orderly tasks; 'i' = inverted tasks.

        const settings = {
            isDarkTheme: isDarkTheme,
            isInvertedTasks: isInvertedTasks,
            isOrderlyTasks: isOrderlyTasks,
        };

        if (config === 't') {
            setIsDarkTheme(value);
            settings.isDarkTheme = value;
        } else if (config === 'o') {
            setIsOrderlyTasks(value);
            settings.isOrderlyTasks = value;
        } else if (config === 'i') {
            setIsInvertedTasks(value);
            settings.isInvertedTasks = value;
        } else {
            console.log('[ERROR] It was not possible to execute the function.');
        }

        localStorage.setItem('settings', JSON.stringify(settings));
    }

    function changeHasSettingChanged(value: boolean) {
        setHasSettingChanged(value);
    }

    function deleteDoneTasks() {
        const newArray = tasks.filter(t => t.isDone === false);
        updateTasks(newArray);
    }

    function deleteAllTasks() {
        updateTasks([]);
    }

    function dismarkAllTasks() {
        const newTask = tasks;

        newTask.forEach(t => (t.isDone = false));

        updateTasks(newTask);
    }

    useEffect(() => {
        interface SettingsProps {
            isDarkTheme: boolean;
            isOrderlyTasks: boolean;
            isInvertedTasks: boolean;
        }

        const lastSettings: SettingsProps = JSON.parse(
            localStorage.getItem('settings')
        );

        if (localStorage.getItem('settings')) {
            setIsDarkTheme(lastSettings.isDarkTheme);
            setIsOrderlyTasks(lastSettings.isOrderlyTasks);
            setIsInvertedTasks(lastSettings.isInvertedTasks);
        }
    }, []);

    return (
        <SettingsContext.Provider
            value={{
                isDarkTheme,
                isOrderlyTasks,
                isInvertedTasks,
                isCautionMessageOn,
                selectedFunction,
                hasSettingChanged,
                changeHasSettingChanged,
                changeConfig,
                changeCautionMessage,
                deleteDoneTasks,
                deleteAllTasks,
                dismarkAllTasks,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}

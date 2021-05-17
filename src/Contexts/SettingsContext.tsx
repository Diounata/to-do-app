import { createContext, ReactNode, useContext, useState } from 'react';

import { useTask } from './TaskContext';

export const SettingsContext = createContext({} as SettingsProps);

interface ContextData {
    children: ReactNode;
}

interface SettingsProps {
    isDarkTheme: boolean;
    isOrderlyTasks: boolean;
    isCautionMessageOn: boolean;
    selectedFunction: number;

    changeConfig(value: boolean, config: string): void;
    changeCautionMessage(value: boolean, numberFunction: number): void;
    deleteDoneTasks(): void;
    deleteAllTasks(): void;
    dismarkAllTasks(): void;
}

export function SettingsContextProvider({ children }: ContextData) {
    const { tasks, updateTasks } = useTask();
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isOrderlyTasks, setIsOrderlyTasks] = useState(false);
    const [isCautionMessageOn, setIsCautionMessageOn] = useState(false);

    // -1 = null; 0 = delete done tasks; 1 = delete all tasks; 2 = dismark all tasks.
    const [selectedFunction, setSelectedFunction] = useState(-1);

    function changeCautionMessage(value: boolean, numberFunction: number) {
        setSelectedFunction(numberFunction);
        setIsCautionMessageOn(value);
    }

    function changeConfig(value: boolean, config: string) {
        // 't' = theme; 'o' = orderly tasks;

        if (config === 't') {
            setIsDarkTheme(value);
        } else if (config === 'o') {
            setIsOrderlyTasks(value);
        }
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

    return (
        <SettingsContext.Provider
            value={{
                isDarkTheme,
                isOrderlyTasks,
                isCautionMessageOn,
                selectedFunction,
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

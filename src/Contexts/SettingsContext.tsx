import { createContext, ReactNode, useContext, useState } from 'react';

import { useTask } from './TaskContext';

export const SettingsContext = createContext({} as SettingsProps);

interface ContextData {
    children: ReactNode;
}

interface TasksProps {
    text: string;
    isDone: boolean;
}

interface SettingsProps {
    isDarkTheme: boolean;
    isOrderlyTasks: boolean;

    changeConfig(value: boolean, config: string): void;
    deleteDoneTasks(): void;
    deleteAllTasks(): void;
    dismarkAllTasks(): void;
}

export function SettingsContextProvider({ children }: ContextData) {
    const { tasks, updateTasks } = useTask();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isOrderlyTasks, setIsOrderlyTasks] = useState(false);

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
                changeConfig,
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

import { createContext, ReactNode, useState } from 'react';

export const TaskContext = createContext({} as TaskContextProps);

interface ContextData {
    children: ReactNode;
}

interface TaskContextProps {
    tasks: TasksProps[];
    updateTasks(value: TasksProps[]): void;
    hasTask: boolean;
    changeHasTask(value: boolean): void;
}

interface TasksProps {
    text: string;
    isDone: boolean;
}

export function TaskContextProvider({ children }: ContextData) {
    const [tasks, setTasks] = useState([]);
    const [hasTask, setHasTask] = useState(false);

    function updateTasks(value: TasksProps[]): void {
        setTasks(value);
    }

    function changeHasTask(value: boolean) {
        setHasTask(value);
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                updateTasks,
                hasTask,
                changeHasTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

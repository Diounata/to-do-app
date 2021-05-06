import { createContext, ReactNode, useState } from 'react';

export const TaskContext = createContext({} as TaskContextProps);

interface ContextData {
    children: ReactNode;
}

interface TaskContextProps {
    hasTask: boolean;
    changeHasTask(a: boolean): void;
}

export function TaskContextProvider({ children }: ContextData) {
    const [hasTask, setHasTask] = useState(true);

    function changeHasTask(a: boolean) {
        setHasTask(a);
    }

    return (
        <TaskContext.Provider value={{ hasTask, changeHasTask }}>
            {children}
        </TaskContext.Provider>
    );
}

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

export const TaskContext = createContext({} as TaskContextProps);

interface ContextData {
    children: ReactNode;
}

interface TaskContextProps {
    tasks: TasksProps[];
    updateTasks(value: TasksProps[]): void;
    hasTask: boolean;
}

interface TasksProps {
    text: string;
    isDone: boolean;
}

export function TaskContextProvider({ children }: ContextData) {
    const [tasks, setTasks] = useState([
        {
            text: 'Do homework',
            isDone: true,
        },
        {
            text: 'Make a cake',
            isDone: true,
        },
        {
            text: 'Wash dishes',
            isDone: true,
        },
        {
            text: 'Study English',
            isDone: true,
        },
        {
            text: 'Code',
            isDone: false,
        },
        {
            text: 'Play any games',
            isDone: false,
        },
    ]);
    const [hasTask, setHasTask] = useState(true);

    useEffect(() => {
        tasks.length === 0 ? setHasTask(false) : setHasTask(true);
    }, [tasks]);

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
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    return useContext(TaskContext);
}

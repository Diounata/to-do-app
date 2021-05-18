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

interface TasksProps {
    text: string;
    isDone: boolean;
}

interface TaskContextProps {
    tasks: TasksProps[];
    hasTask: boolean;

    updateTasks(value: TasksProps[]): void;
    addDoneTask(taskId: number): void;
    deleteTask(taskId: number): void;
}

export function TaskContextProvider({ children }: ContextData) {
    const [tasks, setTasks] = useState([]);
    const [hasTask, setHasTask] = useState(false);

    useEffect(() => {
        tasks.length === 0 ? setHasTask(false) : setHasTask(true);
    }, [tasks]);

    function addDoneTask(taskId: number) {
        let changedTask: TasksProps[] = tasks.filter(
            (t, index) => index === taskId
        );
        changedTask[0].isDone
            ? (changedTask[0].isDone = false)
            : (changedTask[0].isDone = true);

        const newArray = tasks.map((t, index) =>
            index === taskId ? changedTask[0] : t
        );

        updateTasks(newArray);
    }

    function deleteTask(taskId: number) {
        const newArray = tasks.filter((t, index) => index !== taskId);
        updateTasks(newArray);
    }

    function updateTasks(value: TasksProps[]): void {
        setTasks(value);
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                updateTasks,
                hasTask,
                addDoneTask,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    return useContext(TaskContext);
}

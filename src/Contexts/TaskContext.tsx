import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export const TaskContext = createContext({} as TaskContextProps);

import TasksJson from './Tasks.json';

interface ChildrenProps {
  children: ReactNode;
}

interface TaskProps {
  name: string;
  isDone: boolean;
}

interface TaskContextProps {
  tasks: TaskProps[];
  remainingTasks: number;
}

export function TaskProvider({ children }: ChildrenProps) {
  const [tasks, setTasks] = useState<TaskProps[]>(TasksJson);
  const [remainingTasks, setRemainingTasks] = useState<number>(0);

  useEffect(() => {
    const undoneTasksAmount = tasks.filter(task => !task.isDone).length;

    setRemainingTasks(undoneTasksAmount);
  }, [tasks]);

  return <TaskContext.Provider value={{ tasks, remainingTasks }}>{children}</TaskContext.Provider>;
}

export function useTask() {
  return useContext(TaskContext);
}

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

  addTask(task: TaskProps): void;
  deleteTask(id: number): void;
  toggleTaskSituation(id: number): void;
}

export function TaskProvider({ children }: ChildrenProps) {
  const [tasks, setTasks] = useState<TaskProps[]>(TasksJson);
  const [remainingTasks, setRemainingTasks] = useState<number>(0);

  function addTask(task: TaskProps): void {
    if (task.name) {
      const newTasks = [task, ...tasks];

      setTasks(newTasks);
    }
  }

  function deleteTask(id: number): void {
    const newTasks = tasks.filter((_, taskId) => id !== taskId);

    setTasks(newTasks);
  }

  function toggleTaskSituation(id: number): void {
    const selectedTask = tasks.filter((_, taskId) => id === taskId)[0];

    selectedTask.isDone = !selectedTask.isDone;

    const newTasks = tasks.map((task, taskId) => (taskId === id ? selectedTask : task));

    setTasks(newTasks);
  }

  useEffect(() => {
    const undoneTasksAmount = tasks.filter(task => !task.isDone).length;

    setRemainingTasks(undoneTasksAmount);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        remainingTasks,
        addTask,
        deleteTask,
        toggleTaskSituation,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}

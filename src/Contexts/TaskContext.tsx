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

type TasksFilterProps = 'All' | 'Active' | 'Completed';

interface TaskContextProps {
  tasks: TaskProps[];
  remainingTasks: number;
  tasksFilter: TasksFilterProps;

  addTask(task: TaskProps): void;
  deleteTask(id: number): void;
  deleteDoneTasks(): void;
  toggleTaskSituation(id: number): void;
  updateTasksFilter(filter: TasksFilterProps): void;
  filterTasksBySituation(): TaskProps[];
}

export function TaskProvider({ children }: ChildrenProps) {
  const [tasks, setTasks] = useState<TaskProps[]>(TasksJson);
  const [remainingTasks, setRemainingTasks] = useState<number>(0);
  const [tasksFilter, setTasksFilter] = useState<TasksFilterProps>('All');

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

  function deleteDoneTasks(): void {
    const undoneTasks = tasks.filter(task => !task.isDone);

    setTasks(undoneTasks);
  }

  function toggleTaskSituation(id: number): void {
    const selectedTask = tasks.filter((_, taskId) => id === taskId)[0];

    selectedTask.isDone = !selectedTask.isDone;

    const newTasks = tasks.map((task, taskId) => (taskId === id ? selectedTask : task));

    setTasks(newTasks);
  }

  function updateTasksFilter(filter: TasksFilterProps): void {
    setTasksFilter(filter);
  }

  function filterTasksBySituation(): TaskProps[] {
    switch (tasksFilter) {
      case 'Completed':
        return tasks.filter(task => task.isDone);
      case 'Active':
        return tasks.filter(task => !task.isDone);
      default:
        return tasks;
    }
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
        tasksFilter,
        addTask,
        deleteTask,
        deleteDoneTasks,
        toggleTaskSituation,
        updateTasksFilter,
        filterTasksBySituation,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}

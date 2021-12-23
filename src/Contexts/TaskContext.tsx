import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext({} as TaskContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface TaskProps {
  id: string;
  name: string;
  isDone: boolean;
}

type TasksFilterProps = 'All' | 'Active' | 'Completed';

interface TaskContextProps {
  tasks: TaskProps[];
  remainingTasks: number;
  tasksFilter: TasksFilterProps;

  addTask(task: TaskProps): void;
  deleteTask(id: string): void;
  deleteDoneTasks(): void;
  toggleTaskSituation(id: string): void;
  updateTasksFilter(filter: TasksFilterProps): void;
  filterTasksBySituation(): TaskProps[];
}

export function TaskProvider({ children }: ChildrenProps) {
  const [tasks, setTasks] = useState([] as TaskProps[]);
  const [remainingTasks, setRemainingTasks] = useState<number>(0);
  const [tasksFilter, setTasksFilter] = useState<TasksFilterProps>('All');

  function addTask(task: TaskProps): void {
    if (task.name) {
      const id = uuidv4();
      const newTasks = [{ ...task, id }, ...tasks];

      setTasks(newTasks);
    }
  }

  function deleteTask(id: string): void {
    const newTasks = tasks.filter(task => id !== task.id);

    setTasks(newTasks);
  }

  function deleteDoneTasks(): void {
    const undoneTasks = tasks.filter(task => !task.isDone);

    setTasks(undoneTasks);
  }

  function toggleTaskSituation(id: string): void {
    const selectedTask = tasks.filter(task => id === task.id)[0];

    selectedTask.isDone = !selectedTask.isDone;

    const newTasks = tasks.map(task => (task.id === id ? selectedTask : task));

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
    const localData = localStorage.getItem('local-tasks');

    if (localData) {
      setTasks(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    const undoneTasksAmount = tasks.filter(task => !task.isDone).length;

    setRemainingTasks(undoneTasksAmount);
    localStorage.setItem('local-tasks', JSON.stringify(tasks));
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

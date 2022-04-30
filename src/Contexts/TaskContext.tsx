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
  deleteAllDoneTasks(): void;
  toggleTaskSituation(id: string): void;
  updateTasksFilter(filter: TasksFilterProps): void;
  filterTasksBySituation(): TaskProps[];
  getAmountOfLeftItems(): string;
  copyToClipboard(value: string): void;
}

export function TaskProvider({ children }: ChildrenProps) {
  const [tasks, setTasks] = useState([] as TaskProps[]);
  const [remainingTasks, setRemainingTasks] = useState<number>(0);
  const [tasksFilter, setTasksFilter] = useState<TasksFilterProps>('All');

  function addTask(task: TaskProps): void {
    if (task.name) {
      const name = task.name.trim();
      const newTask: TaskProps = { ...task, name };

      const newTasksArray = [newTask, ...tasks];

      setTasks(newTasksArray);
    }
  }

  function deleteTask(id: string): void {
    const newTasks = tasks.filter(task => id !== task.id);

    setTasks(newTasks);
  }

  function deleteAllDoneTasks(): void {
    const undoneTasks = tasks.filter(task => !task.isDone);

    setTasks(undoneTasks);
    setTasksFilter('All');
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

  function getAmountOfLeftItems(): string {
    const getFormattedItemWord = (amount: number): string => {
      return amount === 1 ? 'item' : 'items';
    };

    const getTaskAmount = (amount: number): string => {
      return amount === 0 ? 'No' : amount.toString();
    };

    if (tasksFilter === 'Completed') {
      const completedTasksLength = tasks.length - remainingTasks;

      return `${getTaskAmount(completedTasksLength)} completed ${getFormattedItemWord(completedTasksLength)}`;
    } else {
      return `${getTaskAmount(remainingTasks)} ${getFormattedItemWord(remainingTasks)} left`;
    }
  }

  function copyToClipboard(value: string): void {
    navigator.clipboard.writeText(value).then(
      () => console.log(`Copied '${value}'`),
      err => console.error(err)
    );
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
        deleteAllDoneTasks,
        toggleTaskSituation,
        updateTasksFilter,
        filterTasksBySituation,
        getAmountOfLeftItems,
        copyToClipboard,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}

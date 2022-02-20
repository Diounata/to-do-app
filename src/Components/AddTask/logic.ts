import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTask } from '../../Contexts/TaskContext';

interface Props {
  name: string;

  updateName(e: ChangeEvent<HTMLInputElement>): void;
  handleAddTask(): void;
  handleEnterClick(e: KeyboardEvent<HTMLInputElement>): void;
  resetName(): void;
}

function useAddTask(): Props {
  const { addTask } = useTask();

  const [name, setName] = useState('');

  function updateName(e: ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  function handleAddTask(): void {
    const id = uuidv4();

    addTask({ id, name, isDone: false });
    setName('');
  }

  function handleEnterClick(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.code === 'Enter') handleAddTask();
  }

  function resetName(): void {
    setName('');
  }

  return { name, updateName, handleAddTask, handleEnterClick, resetName };
}

export { useAddTask };

import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

import { useTask } from '../../Contexts/TaskContext';

import { v4 as uuidv4 } from 'uuid';

export function AddTask() {
  const { addTask } = useTask();

  const [name, setName] = useState('');

  function executeAddTask(): void {
    const id = uuidv4();

    addTask({ id, name, isDone: false });
    setName('');
  }

  return (
    <section className={styles.addTaskContainer}>
      <button onClick={executeAddTask}>
        <Image src="/icon-check.svg" width="10px" height="10px" alt="Add" />
      </button>

      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={e => setName(e.target.value)}
        value={name}
      />
    </section>
  );
}

import Image from 'next/image';
import styles from './styles.module.scss';

import { FaUndo } from 'react-icons/fa';
import { useAddTask } from './logic';

export function AddTask() {
  const { name, updateName, handleAddTask, handleEnterClick, resetName } = useAddTask();

  return (
    <section className={styles.addTaskContainer}>
      <button onClick={handleAddTask}>
        <Image src="/icon-check.svg" width="10px" height="10px" alt="Add" />
      </button>

      <input
        type="text"
        placeholder="Create a new todo..."
        value={name}
        onChange={updateName}
        onKeyDown={handleEnterClick}
      />

      <FaUndo title="Reset" onClick={resetName} />
    </section>
  );
}

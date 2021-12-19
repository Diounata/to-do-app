import Image from 'next/image';
import styles from './styles.module.scss';

import { Input } from '../Input';

export function AddTask() {
  return (
    <section className={styles.addTaskContainer}>
      <div>
        <Image src="/icon-check.svg" width="10px" height="10px" alt="Add" />
      </div>

      <Input placeholder="Create a new todo..." />
    </section>
  );
}

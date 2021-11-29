import Image from 'next/image';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <h3>TODO</h3>

        <Image src="/icon-sun.svg" width="24" height="24" alt="Toggle theme" />
      </div>
    </header>
  );
}

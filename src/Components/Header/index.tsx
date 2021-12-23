import Image from 'next/image';
import styles from './styles.module.scss';

import { useTheme } from '../../Contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.headerContainer}>
      <div>
        <h3>TODO</h3>

        <Image
          src={theme === 'dark' ? "/icon-sun.svg" : "/icon-moon.svg"}
          width="24"
          height="24"
          alt="Toggle theme"
          title="Toggle theme"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}

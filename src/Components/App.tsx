import styles from '../styles/index.module.scss';

import { Header } from '../Components/Header';
import { Main } from '../Components/Main';
import { useTheme } from '../Contexts/ThemeContext';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${theme}`}>
      <Header />
      <Main />
    </div>
  );
}

import styles from '../styles/index.module.scss';

import { Header } from '../Components/Header';
import { Main } from '../Components/Main';
import { TaskProvider } from '../Contexts/TaskContext';

export default function Home() {
  return (
    <TaskProvider>
      <div className={`${styles.container} dark`}>
        <Header />
        <Main />
      </div>
    </TaskProvider>
  );
}

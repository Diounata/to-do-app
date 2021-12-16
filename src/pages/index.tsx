import styles from '../styles/index.module.scss';

import { Header } from '../Components/Header';
import { Main } from '../Components/Main';

export default function Home() {
  return (
    <div className={`${styles.container} dark`}>
      <Header />
      <Main />
    </div>
  );
}

import styles from '../styles/index.module.scss';

import { Header } from '../Components/Header';

export default function Home() {
  return (
    <div className={`${styles.container} dark`}>
      <Header />
    </div>
  );
}

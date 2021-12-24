import { FaHeart } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      Made with <FaHeart title="<3" /> by Diounata
    </footer>
  );
}

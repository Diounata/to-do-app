import styles from './styles.module.scss';

export function TaskFooter() {
  return (
    <footer className={styles.footerContainer}>
      <div>4 items left</div>
      <button>Clear Completed</button>
    </footer>
  );
}

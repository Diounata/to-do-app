import { HTMLProps } from 'react';
import styles from './styles.module.scss';

type InputProps = HTMLProps<HTMLInputElement>;

export function Input(props: InputProps) {
  return <input {...props} className={styles.inputContainer} />;
}

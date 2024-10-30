import styles from "./textArea.module.scss"

interface IProps {
  name: string,
  required?: boolean;
}

export default function TextArea({ name, required }: IProps) {
  return (
    <textarea name={name} required={required}className={styles.TextArea} />
  )
}

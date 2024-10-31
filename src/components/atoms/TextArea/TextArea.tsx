import styles from "./textArea.module.scss"

interface IProps {
  name: string
  required?: boolean
  defaultValue?: string
}

export default function TextArea({ name, required, defaultValue  }: IProps) {
  return (
    <textarea name={name} required={required} className={styles.TextArea} defaultValue={defaultValue} />
  )
}

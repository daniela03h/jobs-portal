import styles from "./Input.module.scss"

interface IProps {
  name: string,
  required?: boolean;
}


export default function Input({ name, required }: IProps) {
  return (
    <input type="text" name={name} required={required} className={styles.Input} />
  )
}

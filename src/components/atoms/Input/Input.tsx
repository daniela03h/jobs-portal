import styles from "./Input.module.scss"

interface IProps {
  name: string,
  required?: boolean;
  defaultValue?: string
}


export default function Input({ name, required, defaultValue }: IProps) {
  return (
    <input type="text" name={name} required={required} className={styles.Input} defaultValue={defaultValue}/>
  )
}

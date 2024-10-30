import styles from "./select.module.scss"

interface IProps {
  name: string
  required?: boolean
  options: {
    value: string | number,
    label: string
  }[]
}

export default function Select({ options = [], name, required }:IProps) {
  return (
    <select name={name} required={required} id="" className={styles.Select}>
      {options.map(option => {
        return  <option key={option.value} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}

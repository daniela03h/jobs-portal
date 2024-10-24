import styles from "./select.module.scss"

interface IProps {
  options: {
    value: string | number,
    label: string
  }[]
}

export default function Select({ options = [] }:IProps) {
  return (
    <select name="" id="" className={styles.Select}>
      {options.map(option => {
        return  <option key={option.value} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}

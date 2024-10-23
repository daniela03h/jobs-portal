import styles from "./Label.module.scss"
interface IProps {
  children: React.ReactNode
}

export default function Label({ children }:IProps) {
  return (
    <label className={styles.Label}>{children}</label>
  )
}

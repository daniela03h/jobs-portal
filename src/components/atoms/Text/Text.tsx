import styles from "./Text.module.scss"

interface IProps {
  children: React.ReactNode
}

export default function Text({ children }: IProps) {
  return (
    <p className={styles.Text}>{children}</p>
  )
}

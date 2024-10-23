import styles from "./Title.module.scss"

interface IProps {
  children: React.ReactNode
}

export default function Title({ children }: IProps) {
  return (
    <h1 className={styles.Title}>{children}</h1>
  )
}

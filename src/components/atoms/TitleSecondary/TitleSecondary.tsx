import styles from "./TitleSecondary.module.scss"

interface IProps {
  children: React.ReactNode
}

export default function TitleSecondary({ children }: IProps) {
  return (
    <h3 className={styles.Title}>{children}</h3>
  )
}

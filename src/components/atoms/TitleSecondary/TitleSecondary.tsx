import styles from "./TitleSecondary.module.scss"

interface IProps {
  children: React.ReactNode
}

export default function TitleSecondary({ children }: IProps) {
  return (
    <h2 className={styles.TitleSecondary}>{children}</h2>
  )
}

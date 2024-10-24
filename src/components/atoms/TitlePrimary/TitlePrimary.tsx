import styles from "./TitlePrimary.module.scss"

interface IProps {
  children: React.ReactNode
  
}

export default function TitlePrimary({ children }: IProps) {
  return (
    <h2 className={styles.Title}>{children}</h2>
  )
}

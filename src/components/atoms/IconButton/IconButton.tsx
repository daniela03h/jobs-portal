import styles from "./IconButton.module.scss"

interface IProps {
  children: React.ReactNode;
}

export default function IconButton({ children  }: IProps) {
  return (
    <button className={styles.ButtonIcon}>
  {children}
    </button>
  )
}

import styles from "./IconButton.module.scss"

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function IconButton({ children, className  }: IProps) {
  return (
    <button className={`${styles.ButtonIcon} ${className}`}>
  {children}
    </button>
  )
}

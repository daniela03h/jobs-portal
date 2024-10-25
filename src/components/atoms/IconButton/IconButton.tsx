import styles from "./IconButton.module.scss";

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function IconButton({ children, className, onClick }: IProps) {
  return (
    <button className={`${styles.ButtonIcon} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

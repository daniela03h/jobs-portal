import styles from "./InfoContainer.module.scss";

interface IProps {
  children: React.ReactNode
}

export default function InfoContainer({ children }:IProps) {
  return <div className={styles.InfoContainer}>{children}</div>;
}

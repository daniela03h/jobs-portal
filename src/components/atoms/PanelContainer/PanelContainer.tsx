import styles from "./PanelContainer.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function PanelContainer({ children }: IProps) {
  return <div className={styles.Container}>{children}</div>;
}

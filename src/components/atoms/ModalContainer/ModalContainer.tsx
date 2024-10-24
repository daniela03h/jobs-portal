import styles from "./ModalContainer.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function ModalContainer({ children }: IProps) {
  return (
    <div className={styles.Container}>
      {" "}
      <div className={styles.Modal}>{children}</div>
    </div>
  );
}

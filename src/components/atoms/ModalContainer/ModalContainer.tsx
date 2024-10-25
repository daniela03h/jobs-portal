import { IoClose } from "react-icons/io5";
import styles from "./ModalContainer.module.scss";
import IconButton from "../IconButton/IconButton";

interface IProps {
  children: React.ReactNode;
  onClose: () => void
}

export default function ModalContainer({ children, onClose }: IProps) {
  return (
    <div className={styles.Container}>
      <div className={styles.Modal}>
        <div className={styles.ContainerIcon}>
          <IconButton className={styles.Icon} onClick={onClose}>
            <IoClose />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
}

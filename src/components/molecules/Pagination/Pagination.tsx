import IconButton from "@/components/atoms/IconButton/IconButton";
import styles from "./Pagination.module.scss";
import style from "../../atoms/IconButton/IconButton.module.scss"
import Text from "@/components/atoms/Text/Text";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Pagination() {
  return (
    <div className={styles.Pagination}>
      <IconButton className={style.BtArrow}>
        <IoChevronBack />
      </IconButton>
      <Text>Pagina 1 de 2</Text>
      <IconButton className={style.BtArrow}>
        <IoChevronForward />
      </IconButton>
    </div>
  );
}

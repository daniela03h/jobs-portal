import IconButton from "@/components/atoms/IconButton/IconButton";
import styles from "./Pagination.module.scss";
import btnstyle from "../../atoms/IconButton/IconButton.module.scss"
import Text from "@/components/atoms/Text/Text";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Pagination() {
  return (
    <div className={styles.Pagination}>
      <IconButton className={btnstyle.BtArrow}>
        <IoChevronBack />
      </IconButton>
      <Text>Pagina 1 de 2</Text>
      <IconButton className={btnstyle.BtArrow}>
        <IoChevronForward />
      </IconButton>
    </div>
  );
}

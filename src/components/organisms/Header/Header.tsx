import styles from "./Header.module.scss";
import btn from "./../../atoms/Button/Button.module.scss"
import Button from "@/components/atoms/Button/Button";
import SearchInput from "@/components/atoms/SearchInput/SearchInput";
import Title from "@/components/atoms/Title/Title";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import Tabs from "@/components/molecules/Tabs/Tabs";
import { IoIosAddCircleOutline} from "react-icons/io";

interface IProps {
  addButtonLabel: string
  titlePrimary: string
  type: string
}

export default function Header({ addButtonLabel, titlePrimary, type }: IProps) {
  return (
    <div className={styles.HeaderContainer}>
      <Title>Panel de Administración</Title>
      <div className={styles.ContainerOne}>
        <Tabs type={type} />
        <SearchInput />
      </div>

      <div className={styles.ContainerTwo}>
        <TitlePrimary>{titlePrimary}</TitlePrimary>
        <Button variant="rounded" className={`${type === 'Vacantes' ? btn.BtPurple : btn.BtPink }`} >
          <IoIosAddCircleOutline />
          {addButtonLabel}
        </Button>
      </div>
    </div>
  );
}

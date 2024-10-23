import styles from "./Header.module.scss";
import Button from "@/components/atoms/Button/Button";
import SearchInput from "@/components/atoms/SearchInput/SearchInput";
import Title from "@/components/atoms/Title/Title";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import Tabs from "@/components/molecules/Tabs/Tabs";
import { IoIosAddCircleOutline} from "react-icons/io";

interface IProps {
  addButtonLabel: string;
}

export default function Header({ addButtonLabel }: IProps) {
  return (
    <div className={styles.HeaderContainer}>
      <Title>Panel de Administración</Title>
      <div className={styles.ContainerOne}>
        <Tabs />
        <SearchInput />
      </div>

      <div className={styles.ContainerTwo}>
        <TitlePrimary>Vacantes </TitlePrimary>
        <Button variant="rounded" color="pink">
          <IoIosAddCircleOutline />
          {addButtonLabel}
        </Button>
      </div>
    </div>
  );
}

import styles from "./AdminPanel.module.scss";
import Header from "@/components/organisms/Header/Header";
import PanelContainer from "@/components/atoms/PanelContainer/PanelContainer";
import Pagination from "@/components/molecules/Pagination/Pagination";

interface IProps {
  addButtonLabel?: string;
  titlePrimary?: string;
  type: string;
  children: React.ReactNode
}

export default function AdminPanel({
  addButtonLabel = "Agregar",
  titlePrimary = "",
  type,
  children
}: IProps) {
  return (
    <PanelContainer>
      <Header
        addButtonLabel={addButtonLabel}
        titlePrimary={titlePrimary}
        type={type}
      />
      <main className={styles.Main}>
        {children}
      </main>
      <Pagination />
    </PanelContainer>
  );
}

import styles from "./Layout.module.scss";
import Header from "@/components/organisms/Header/Header";
import PanelContainer from "@/components/atoms/PanelContainer/PanelContainer";

interface IProps {
  addButtonLabel?: string;
  titlePrimary?: string;
  type: string;
  children: React.ReactNode
}

export default function Layout({
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
    </PanelContainer>
  );
}

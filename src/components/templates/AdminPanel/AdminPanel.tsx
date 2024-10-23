import Card from "@/components/organisms/Card/Card";
import styles from "./AdminPanel.module.scss";
import Header from "@/components/organisms/Header/Header";
import PanelContainer from "@/components/atoms/PanelContainer/PanelContainer";
import Pagination from "@/components/molecules/Pagination/Pagination";

interface IProps {
  type?: "vacancies" | "companies";
}

export default function AdminPanel({ type = "vacancies" }: IProps) {
  return (
    <div>
      <PanelContainer>
        <Header
          addButtonLabel={
            type === "vacancies" ? "Agregar vacante" : "Agregar compania"
          }
        />
        <main className={styles.Main}>
          <Card />
          <Card />
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </main>
        <Pagination />
      </PanelContainer>
    </div>
  );
}

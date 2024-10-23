import Card from "@/components/organisms/Card/Card";
import styles from "./AdminPanel.module.scss";
import Header from "@/components/organisms/Header/Header";

interface IProps {
  type?: "vacancies" | "companies"
}

export default function AdminPanel({ type = "vacancies" }:IProps) {
  return (
    <div className={styles.ContainerAdminPanel}>
      <Header addButtonLabel={type === "vacancies" ? "Agregar vacante" : "Agregar compania"} />
      <main className={styles.Main}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </main>
    </div>
  )
}

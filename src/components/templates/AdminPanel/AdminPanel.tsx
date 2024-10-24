import Card from "@/components/organisms/Card/Card";
import styles from "./AdminPanel.module.scss";
import Header from "@/components/organisms/Header/Header";
import PanelContainer from "@/components/atoms/PanelContainer/PanelContainer";
import Pagination from "@/components/molecules/Pagination/Pagination";
// import FormVacancie from "@/components/organisms/FormVacancie/FormVacancie";
// import FormCompanies from "@/components/organisms/FormCompanies/FormCompanies";

interface IProps {
  addButtonLabel?: string;
  titlePrimary?: string;
  type: string;
}

export default function AdminPanel({
  addButtonLabel = "Agregar",
  titlePrimary = "",
  type,
}: IProps) {
  return (
    <>
      <PanelContainer>
        <Header
          addButtonLabel={addButtonLabel}
          titlePrimary={titlePrimary}
          type={type}
        />
        <main className={styles.Main}>
          <Card type="Vacantes" />
          <Card type="Vacantes" />
          <Card type="Vacantes" />
          <Card type="Compañía" />
        </main>
        <Pagination />
      </PanelContainer>

       {/* <FormCompanies /> */}
       {/* <FormVacancie /> */}
    </>
  );
}

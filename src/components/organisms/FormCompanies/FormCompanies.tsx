import Button from "@/components/atoms/Button/Button";
import styles from "./FormCompanies.module.scss"
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";


export default function FormCompanies() {
  return (
    <div className={styles.Container}>
      <TitlePrimary>Agregar Compania</TitlePrimary>
      <form action="" className={styles.Form}>
        <InputContainer />
        <InputContainer />
        <InputContainer />
        <Button fullwidth={true} color="pink">Agregar</Button>
      </form>
    </div>
  );
}

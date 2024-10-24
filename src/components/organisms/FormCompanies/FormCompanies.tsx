import Button from "@/components/atoms/Button/Button";
import styles from "./FormCompanies.module.scss"
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import ModalContainer from "@/components/atoms/ModalContainer/ModalContainer";


export default function FormCompanies() {
  return (
    <ModalContainer>
      <TitlePrimary>Agregar Compania</TitlePrimary>
      <form action="" className={styles.Form}>
        <InputContainer  label="Nombre"/>
        <InputContainer label="Ubicación"/>
        <InputContainer label="Contacto"/>
        <Button fullwidth={true} color="pink">Agregar</Button>
      </form>
    </ModalContainer>
  );
}

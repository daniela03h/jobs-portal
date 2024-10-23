import Button from "@/components/atoms/Button/Button";
import styles from "./FormVacancie.module.scss"
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import TextAreaContainer from "@/components/molecules/TextAreaContainer/TextAreaContainer";
import SelectContainer from "@/components/molecules/SelectContainer/SelectContainer";

export default function FormVacancie() {
  return (
    <div className={styles.Container}>
      <TitlePrimary>Agregar Vacante</TitlePrimary>
      <form action="" className={styles.Form}>
        <InputContainer />
        <TextAreaContainer />
        <SelectContainer />
        <SelectContainer />
        <Button fullwidth={true} color="purple">Agregar</Button>
      </form>
    </div>
  );
}

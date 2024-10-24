import Button from "@/components/atoms/Button/Button";
import styles from "./FormVacancie.module.scss"
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import TextAreaContainer from "@/components/molecules/TextAreaContainer/TextAreaContainer";
import SelectContainer from "@/components/molecules/SelectContainer/SelectContainer";

export default function FormVacancie() {
  return (
    <>
      <TitlePrimary>Agregar Vacante</TitlePrimary>
      <form action="" className={styles.Form}>
        <InputContainer label="Título"/>
        <TextAreaContainer label="Descripción" />
        <SelectContainer label="Estado" options={[
          {
            value: "open",
            label: "OPEN"
          },
          {
            value: "close",
            label: "CLOSE"
          }
        ]}/>
        <SelectContainer label="Compañía" options={[
          {
            value: "select",
            label: "Selecciona una compañía"
          }
        ]} />
        <Button fullwidth={true} color="purple">Agregar</Button>
      </form>
    </>
  );
}

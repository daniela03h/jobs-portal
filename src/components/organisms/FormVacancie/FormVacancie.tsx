import Button from "@/components/atoms/Button/Button";
import styles from "./FormVacancie.module.scss"
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import TextAreaContainer from "@/components/molecules/TextAreaContainer/TextAreaContainer";
import SelectContainer from "@/components/molecules/SelectContainer/SelectContainer";
import ModalContainer from "@/components/atoms/ModalContainer/ModalContainer";
interface IProps {
  titlePrimary: string
  onClose: () => void
  editButtonLabel: string
}

export default function FormVacancie({ titlePrimary, onClose, editButtonLabel }: IProps) {
  return (
    <ModalContainer onClose={onClose}>
      <TitlePrimary>{titlePrimary}</TitlePrimary>
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
        <Button fullwidth={true} color="purple">{editButtonLabel}</Button>
      </form>
    </ModalContainer>
  );
}

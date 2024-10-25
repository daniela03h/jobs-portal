import Button from "@/components/atoms/Button/Button";
import styles from "./FormCompanies.module.scss";
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import ModalContainer from "@/components/atoms/ModalContainer/ModalContainer";

interface IProps {
  titlePrimary: string;
  onClose: () => void;
  editButtonLabel: string;
}

export default function FormCompanies({
  titlePrimary,
  onClose,
  editButtonLabel,
}: IProps) {
  return (
    <ModalContainer onClose={onClose}>
      <TitlePrimary>{titlePrimary}</TitlePrimary>
      <form action="" className={styles.Form}>
        <InputContainer label="Nombre" />
        <InputContainer label="Ubicación" />
        <InputContainer label="Contacto" />
        <Button fullwidth={true} color="pink">
          {editButtonLabel}
        </Button>
      </form>
    </ModalContainer>
  );
}

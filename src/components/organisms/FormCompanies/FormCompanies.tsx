"use client"

import Button from "@/components/atoms/Button/Button";
import styles from "./FormCompanies.module.scss";
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import ModalContainer from "@/components/atoms/ModalContainer/ModalContainer";
import { useRouter } from "next/navigation";
import { CompaniesService } from "@/services/companies.service";
import { IPostCompany } from "@/models/companies.model";
import Input from "@/components/atoms/Input/Input";

interface IProps {
  titlePrimary: string;
  onClose: () => void;
  editButtonLabel: string;
}

const useCompaniesServices = new CompaniesService();

export default function FormCompanies({
  titlePrimary,
  onClose,
  editButtonLabel,
}: IProps) {
  const router = useRouter();

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries()
    );
    console.log(formData);

    try {
      await useCompaniesServices.create(formData as unknown as IPostCompany);
      router.refresh();
      onClose()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalContainer onClose={onClose}>
      <TitlePrimary>{titlePrimary}</TitlePrimary>
      <form action="" className={styles.Form} onSubmit={onFormSubmit}>
        <InputContainer label="Nombre">
          <Input name="name" required={true} />
        </InputContainer>
        <InputContainer label="Ubicación">
          <Input name="location" required={true} />
        </InputContainer>
        <InputContainer label="Contacto">
          <Input name="contact" required={true} />
        </InputContainer>
        <Button fullwidth={true} color="pink">
          {editButtonLabel}
        </Button>
      </form>
    </ModalContainer>
  );
}

"use client";

import Button from "@/components/atoms/Button/Button";
import styles from "./FormCompanies.module.scss";
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import ModalContainer from "@/components/atoms/ModalContainer/ModalContainer";
import { useRouter } from "next/navigation";
import { CompaniesService } from "@/services/companies.service";
import { IContentCompany, IPostCompany } from "@/models/companies.model";
import Input from "@/components/atoms/Input/Input";
import { useEffect, useState } from "react";

interface IProps {
  titlePrimary: string;
  onClose: () => void;
  editButtonLabel: string;
  idCard: string;
}

const useCompaniesServices = new CompaniesService();

export default function FormCompanies({
  titlePrimary,
  onClose,
  editButtonLabel,
  idCard,
}: IProps) {
  const router = useRouter();
  const [companyData, setCompanyData] = useState<IContentCompany>();

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries()
    );
    console.log(formData);

    try {
      if (companyData) {
        await useCompaniesServices.update(
          companyData.id,
          formData as unknown as IPostCompany
        );
      } else {
        await useCompaniesServices.create(formData as unknown as IPostCompany);
      }
      router.refresh();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadCompanyData = async () => {
      if (idCard) {
        try {
          const data = await useCompaniesServices.findById(idCard);
          setCompanyData(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    loadCompanyData();
  }, [idCard]);

  return (
    <ModalContainer onClose={onClose}>
      <TitlePrimary>{titlePrimary}</TitlePrimary>
      <form action="" className={styles.Form} onSubmit={onFormSubmit}>
        <InputContainer label="Nombre">
          <Input name="name" required={true} defaultValue={companyData?.name} />
        </InputContainer>
        <InputContainer label="Ubicación">
          <Input name="location" required={true}  defaultValue={companyData?.location} />
        </InputContainer>
        <InputContainer label="Contacto">
          <Input name="contact" required={true}  defaultValue={companyData?.contact} />
        </InputContainer>
        <Button fullwidth={true} color="pink">
          {editButtonLabel}
        </Button>
      </form>
    </ModalContainer>
  );
}

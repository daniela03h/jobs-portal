"use client";

import Button from "@/components/atoms/Button/Button";
import styles from "./FormVacancie.module.scss";
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import TextAreaContainer from "@/components/molecules/TextAreaContainer/TextAreaContainer";
import SelectContainer, {
  Option,
} from "@/components/molecules/SelectContainer/SelectContainer";
import ModalContainer from "@/components/atoms/ModalContainer/ModalContainer";
import { useEffect, useState } from "react";
import { CompaniesService } from "@/services/companies.service";
import Input from "@/components/atoms/Input/Input";
import TextArea from "@/components/atoms/TextArea/TextArea";
import { IPostVacancy } from "@/models/vacancies.model";
import { useRouter } from "next/navigation";
import { VacanciesService } from "@/services/vacancies.service";
interface IProps {
  titlePrimary: string;
  onClose: () => void;
  editButtonLabel: string;
}

const useCompaniesServices = new CompaniesService();
const useVacancierServices = new VacanciesService()

export default function FormVacancie({
  titlePrimary,
  onClose,
  editButtonLabel,
}: IProps) {
  const router = useRouter();
  const [companyOptions, setCompanyOptions] = useState<Option[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const companyResponse = await useCompaniesServices.findAllCompanies();
      const options = companyResponse.map((company) => {
        return { value: company.id, label: company.name };
      });
      setCompanyOptions(options);
    };
    loadData();
  }, []);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries()
    );
    console.log(formData);

    try {
      await useVacancierServices.create(formData as unknown as IPostVacancy);
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
        <InputContainer label="Título">
          <Input name="title" required={true} />
        </InputContainer>
        <TextAreaContainer label="Descripción">
          <TextArea name="description" required={true} />
        </TextAreaContainer>
        <SelectContainer
          name="status"
          required={true}
          label="Estado"
          options={[
            {
              value: "ACTIVE",
              label: "OPEN",
            },
            {
              value: "close",
              label: "CLOSE",
            },
          ]}
        />
        <SelectContainer
          name="companyId"
          required={true}
          label="Compañía"
          options={companyOptions}
        />
        <Button fullwidth={true} color="purple">
          {editButtonLabel}
        </Button>
      </form>
    </ModalContainer>
  );
}

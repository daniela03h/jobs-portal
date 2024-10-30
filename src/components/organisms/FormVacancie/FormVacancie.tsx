"use client"

import Button from "@/components/atoms/Button/Button";
import styles from "./FormVacancie.module.scss"
import InputContainer from "@/components/molecules/InputContainer/InputContainer";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import TextAreaContainer from "@/components/molecules/TextAreaContainer/TextAreaContainer";
import SelectContainer, { Option } from "@/components/molecules/SelectContainer/SelectContainer";
import ModalContainer from "@/components/atoms/ModalContainer/ModalContainer";
import { useEffect, useState } from "react";
import { CompaniesService } from "@/services/companies.service";

const useCompaniesServices = new CompaniesService()
interface IProps {
  titlePrimary: string
  onClose: () => void
  editButtonLabel: string
}



export default function FormVacancie({ titlePrimary, onClose, editButtonLabel }: IProps) {
const [companyOptions, setCompanyOptions] = useState<Option[]>([])

useEffect(() =>{
  const loadData = async () => {
    const companyResponse = await useCompaniesServices.findAll(1, 900)
    const options = companyResponse.content.map((company) => {
      return {value: company.id, label: company.name}
    })
    setCompanyOptions(options)
  }
  loadData()
},[])



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
        <SelectContainer label="Compañía" options={companyOptions} />
        <Button fullwidth={true} color="purple">{editButtonLabel}</Button>
      </form>
    </ModalContainer>
  );
}

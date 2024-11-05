"use client"

import { useState } from "react";
import styles from "./Header.module.scss";
import Button from "@/components/atoms/Button/Button";
import SearchInput from "@/components/atoms/SearchInput/SearchInput";
import Title from "@/components/atoms/Title/Title";
import TitlePrimary from "@/components/atoms/TitlePrimary/TitlePrimary";
import Tabs from "@/components/molecules/Tabs/Tabs";
import { IoIosAddCircleOutline } from "react-icons/io";
import FormVacancie from "@/components/organisms/FormVacancie/FormVacancie";
import FormCompanies from "@/components/organisms/FormCompanies/FormCompanies";

interface IProps {
  addButtonLabel: string;
  titlePrimary: string;
  type: string;
}

export default function Header({ addButtonLabel, titlePrimary, type }: IProps) {
  const [modalCompaniesOpen, setModalCompaniesOpen] = useState<boolean>(false);
  const [modalVacancieOpen, setModalVacanciesOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    if (type === "Vacantes") {
      setModalVacanciesOpen(true);
      setModalCompaniesOpen(false);
      return;
    }
    setModalVacanciesOpen(false);
    setModalCompaniesOpen(true);
  };

  return (
    <>
      <div className={styles.HeaderContainer}>
        <Title>Panel de Administración</Title>
        <div className={styles.ContainerOne}>
          <Tabs />
          <SearchInput />
        </div>

        <div className={styles.ContainerTwo}>
          <TitlePrimary>{titlePrimary}</TitlePrimary>
          <Button
            variant="rounded"
            color={`${type === "Vacantes" ? "purple" : "pink"}`}
            onClick={handleOnClick}
          >
            <IoIosAddCircleOutline />
            {addButtonLabel}
          </Button>
        </div>
      </div>

      {modalVacancieOpen === true && (
        <FormVacancie
          editButtonLabel="Agregar"
          onClose={() => setModalVacanciesOpen(false)}
          titlePrimary="Agregar Vacante"
        />
      )}
      {modalCompaniesOpen === true && (
        <FormCompanies
          editButtonLabel="Agregar"
          onClose={() => setModalCompaniesOpen(false)}
          titlePrimary="Agregar Compañia"
        />
      )}
    </>
  );
}

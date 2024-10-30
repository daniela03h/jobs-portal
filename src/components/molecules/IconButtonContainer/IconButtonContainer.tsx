"use client"

import styles from "./IconButtonContainer.module.scss";
import btnstyle from "../../atoms/IconButton/IconButton.module.scss";
import IconButton from "@/components/atoms/IconButton/IconButton";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import FormCompanies from "@/components/organisms/FormCompanies/FormCompanies";
import FormVacancie from "@/components/organisms/FormVacancie/FormVacancie";

interface IProps {
  type: string;
}

export default function IconButtonContainer({ type }: IProps) {
  const [modalCompaniesOpen, setModalCompaniesOpen] = useState<boolean>(false);
  const [modalVacancieOpen, setModalVacanciesOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    console.log('>> type', type)
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
      <div className={styles.Container}>
        <IconButton
          className={`${
            type === "Vacantes"
              ? btnstyle.BtPencilVacancies
              : btnstyle.BtPencilCompanies
          }`}
          onClick={handleOnClick}
        >
          <MdOutlineEdit />
        </IconButton>
        <IconButton className={btnstyle.BtTrash}>
          <FaRegTrashAlt />
        </IconButton>
      </div>
      {modalVacancieOpen === true && (
        <FormVacancie
          onClose={() => setModalVacanciesOpen(false)}
          titlePrimary="Editar Vacante"
          editButtonLabel="Guardar"
        />
      )}
      {modalCompaniesOpen === true && (
        <FormCompanies
          onClose={() => setModalCompaniesOpen(false)}
          titlePrimary="Editar Compañia"
          editButtonLabel="Guardar"
        />
      )}
    </>
  );
}

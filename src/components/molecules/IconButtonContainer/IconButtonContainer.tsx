"use client";

import styles from "./IconButtonContainer.module.scss";
import btnstyle from "../../atoms/IconButton/IconButton.module.scss";
import IconButton from "@/components/atoms/IconButton/IconButton";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import FormCompanies from "@/components/organisms/FormCompanies/FormCompanies";
import FormVacancie from "@/components/organisms/FormVacancie/FormVacancie";
import { VacanciesService } from "@/services/vacancies.service";
import { CompaniesService } from "@/services/companies.service";
import { useRouter } from "next/navigation";

interface IProps {
  type: string;
  idCard: string;
}

const useCompaniesServices = new CompaniesService();
const useVacancierServices = new VacanciesService();

export default function IconButtonContainer({ type, idCard }: IProps) {
  const router = useRouter();
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

  const handleDelete = async () => {
    try {
      if (type === "Vacantes") {
        await useVacancierServices.destroy(idCard);
        alert("Vacante eliminada correctamente");
      } else if (type === "Compañía") {
        const result = await useCompaniesServices.destroy(idCard);
        console.log('>> destroy result',result)
        alert("Empresa eliminada correctamente");
      }
    } catch (error) {
      console.error("Error eliminando empresa:", error);
      alert("Ocurrió un error al eliminar la empresa.");
    } finally {
      router.refresh();
    }
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
        <IconButton className={btnstyle.BtTrash} onClick={handleDelete}>
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

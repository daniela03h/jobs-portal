"use client"

import btn from "./../../atoms/Button/Button.module.scss"
import { useRouter } from "next/navigation";
import styles from "./Tabs.module.scss";
import Button from "@/components/atoms/Button/Button";
import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { RiSuitcaseLine } from "react-icons/ri";

interface IProps {
  type: string
}

export default function Tabs({ type,  }:IProps) {
  const router = useRouter();

  const handleonClickVacancies = () =>{
    router.push("/vacancies")
  }

  const handleonClickCompanies = () =>{
    router.push("/companies")
  }

  return (
    <div className={styles.Container}>
      <Button variant="rounded" className={`${type === 'Vacantes' ? btn.BtPurple : ''}`} onClick={handleonClickVacancies}>
      <RiSuitcaseLine />
        Vacantes
      </Button>
      <Button variant="rounded" className={`${type === 'Compañía' ? btn.BtPink : ''}`} onClick={handleonClickCompanies }>
        <LuBuilding2 />
        Compañías
      </Button>
    </div>
  );
}

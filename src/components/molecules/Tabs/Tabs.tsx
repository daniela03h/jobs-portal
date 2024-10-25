"use client";

import { useRouter } from "next/navigation";
import styles from "./Tabs.module.scss";
import Button from "@/components/atoms/Button/Button";
import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { RiSuitcaseLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleonClickVacancies = () => {
    router.push("/vacancies");
  };

  const handleonClickCompanies = () => {
    router.push("/companies");
  };

  return (
    <div className={styles.Container}>
      <Button
        variant="rounded"
        color={currentPath === "/vacancies" ? "purple" : undefined}
        onClick={handleonClickVacancies}
      >
        <RiSuitcaseLine />
        Vacantes
      </Button>
      <Button
        variant="rounded"
        color={currentPath.startsWith("/companies") ? "pink" : undefined}
        onClick={handleonClickCompanies}
      >
        <LuBuilding2 />
        Compañías
      </Button>
    </div>
  );
}

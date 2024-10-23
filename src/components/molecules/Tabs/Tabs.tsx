import styles from "./Tabs.module.scss";
import Button from "@/components/atoms/Button/Button";
import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { RiSuitcaseLine } from "react-icons/ri";

export default function Tabs() {
  return (
    <div className={styles.Container}>
      <Button variant="rounded" color="purple">
      <RiSuitcaseLine />
        Vacantes
      </Button>
      <Button variant="rounded">
        <LuBuilding2 />
        Compañías
      </Button>
    </div>
  );
}

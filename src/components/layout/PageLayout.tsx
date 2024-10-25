"use client";

import AdminPanel from "@/components/templates/AdminPanel/AdminPanel";
import Card from "@/components/organisms/Card/Card";
import { usePathname } from "next/navigation";

interface IAdminPanelProps {
  addButtonLabel: string;
  titlePrimary: string;
  type: string;
}

interface IDynamicProps {
  "/companies": IAdminPanelProps;
  "/vacancies": IAdminPanelProps;
}

const dynamicProps: IDynamicProps = {
  "/companies": {
    addButtonLabel: "Agregar Compañía",
    titlePrimary: "Compañías",
    type: "Compañía",
  },
  "/vacancies": {
    addButtonLabel: "Agregar Vacante",
    titlePrimary: "Vacantes",
    type: "Vacantes",
  },
};

export default function PageLayout() {
  const currentPath = usePathname();


  const props = dynamicProps[currentPath as keyof IDynamicProps];
  return (
    <AdminPanel
      addButtonLabel={props.addButtonLabel}
      titlePrimary={props.titlePrimary}
      type={props.type}
    >
      <Card type="Vacantes" />
      <Card type="Vacantes" />
      <Card type="Vacantes" />
      <Card type="Compañía" />
      <Card type="Compañía" />
      <Card type="Compañía" />
    </AdminPanel>
  );
}

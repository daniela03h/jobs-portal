"use client";

import { usePathname } from "next/navigation";
import { ICompanyResponse } from "@/models/companies.model";
import CardCompany from "@/components/organisms/CardCompany/CardCompany";
import { IVacancyResponse } from "@/models/vacancies.model";
import Layout from "@/components/layout/Layout";
import CardVacant from "@/components/organisms/CardVacant/CardVancat";
import Pagination from "@/components/molecules/Pagination/Pagination";

interface ICardProps {
  data: IVacancyResponse | ICompanyResponse
}

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

export default function AdminPanel({ data }: ICardProps) {
  const companyData = data as ICompanyResponse;
  const vacantData = data as IVacancyResponse;

  const currentPath = usePathname();
  const props = dynamicProps[currentPath as keyof IDynamicProps];

  return (
    <Layout
      addButtonLabel={props.addButtonLabel}
      titlePrimary={props.titlePrimary}
      type={props.type}
    >
      {currentPath === "/companies" && companyData.content.map((company) => (
        <CardCompany
          type="Compañía"
          key={company.id}
          id={company.id}
          title={company.name}
          location={company.location}
          contact={company.contact}
        />
      )) } 
      {currentPath === "/vacancies" && vacantData.content.map((vacant) => (
        <CardVacant
          type="Vacantes"
          key={vacant.id}
          id={String(vacant.id)}
          title={vacant.title}
          description={vacant.description}
          status={vacant.status}
          company={vacant.company.name}
        />
      ))}
      <Pagination data={currentPath === "/companies" ? companyData : vacantData}/>
    </Layout>
  );
}


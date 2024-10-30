import AdminPanel from "@/components/templates/AdminPanel/AdminPanel";
import { CompaniesService } from "@/services/companies.service";

const useCompaniesServices = new CompaniesService()

interface IProps {
  searchParams: {
    page: string;
    size: string;
    name: string;
  }
}

export const generateMetadata = async ({ searchParams}: IProps)=> {
  const page = searchParams.page ?? 1;
  return {
    title: `Clientes - Página ${page}`,
    description: 'Gestion de compañias'
  }
}

export default async function Companies({ searchParams }: IProps) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const size = searchParams.size ? parseInt(searchParams.size) : 5

  const response = await useCompaniesServices.findAll(page, size)
  
  return (
     <AdminPanel data={response}/>
  );
}

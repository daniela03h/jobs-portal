import AdminPanel from "@/components/templates/AdminPanel/AdminPanel";
import { VacanciesService } from "@/services/vacancies.service";

const useVacaniesServices = new VacanciesService()
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
    description: 'Gestion de Vatantes'
  }
}

export default async function Vacancies({ searchParams }: IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const size = searchParams.size ? parseInt(searchParams.size) : 5

  const response = await useVacaniesServices.findAll(page, size)

  return (
     <AdminPanel data={response}  />
  );
}
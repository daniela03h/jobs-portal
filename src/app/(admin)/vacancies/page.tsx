import AdminPanel from "@/components/templates/AdminPanel/AdminPanel";
import { VacanciesService } from "@/services/vacancies.service";

// interface IProps {
//   searhParams: {
//     page: string;
//     size: string;

//   }
// }

const useVacaniesServices = new VacanciesService()

export default async function Vacancies() {
  const response = await useVacaniesServices.findAll()

  return (
     <AdminPanel data={response}  />
  );
}

import { IVacancyResponse } from "@/models/vacancies.model";
import { HttpClient } from "@/utils/client-http";

export class VacanciesService {
  private httpClient: HttpClient

  constructor(){
    this.httpClient = new HttpClient()
  }

  async findAll() {
    try {
      const vacancies = this.httpClient.get<IVacancyResponse>("vacants?page=1&size=100")
      return vacancies
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
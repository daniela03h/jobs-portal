
import { IContentVacancy, IPostVacancy, IVacancyResponse } from "@/models/vacancies.model";
import { HttpClient } from "@/utils/client-http";

export class VacanciesService {
  private httpClient: HttpClient

  constructor(){
    this.httpClient = new HttpClient()
  }

  async findAll(page: number, size: number) {
    try {
      const vacancies = this.httpClient.get<IVacancyResponse>(`vacants?page=${page}&size=${size}`)
      return vacancies
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findById(id:string){
    try{
        const response = this.httpClient.get<IContentVacancy>(`vacants/${id}`);
        return response
    } catch(error){
        console.log(error);
        throw error;
    }
}

  async create(body: IPostVacancy) {
    try {
      const vacancies = this.httpClient.post<IContentVacancy, IPostVacancy>("vacants", body)
      return vacancies
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  
  async update(id: string, body: IPostVacancy) {
    try {
      const vacancies = this.httpClient.put<IContentVacancy, IPostVacancy>(`vacants/${id}`, body)
      return vacancies
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async destroy(id: string) {
    try {
      const vacancies = this.httpClient.delete<IVacancyResponse>(`vacants/${id}`);
      return vacancies;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
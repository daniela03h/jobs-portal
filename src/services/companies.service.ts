import { ICompanyResponse, IContentCompany, IPostCompany } from "@/models/companies.model";
import { HttpClient } from "@/utils/client-http";

export class CompaniesService {
  private httpClient: HttpClient

  constructor(){
    this.httpClient = new HttpClient()
  };

  async findAll(page: number, size: number) {
    try {
      const companies = this.httpClient.get<ICompanyResponse>(`company?page=${page}&size=${size}`)
      return companies
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findById(id:string){
    try{
        const response = this.httpClient.get<IContentCompany>(`"company?page=1&size=100"/${id}`);
        return response
    } catch(error){
        console.log(error);
        throw error;
    }
}

  async create(body: IPostCompany) {
    try {
      const companies = this.httpClient.post<IContentCompany, IPostCompany>("company", body)
      return companies
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // async update(id: string, body: IPostCompany) {
  //   try {
  //     const companies = this.httpClient.put<IContentCompany, IPostCompany>(`company?page=1&size=100/${id}`, body)
  //     return companies
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

//   async destroy(id: string) {
//     try {
//       const companies = this.httpClient.delete<ICompanyResponse>(`company?page=1&size=100/${id}`);
//       return companies;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
 }
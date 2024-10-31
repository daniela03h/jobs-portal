import {
  ICompanyResponse,
  IContentCompany,
  IPostCompany,
} from "@/models/companies.model";
import { HttpClient } from "@/utils/client-http";

export class CompaniesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async findAll(page: number, size: number,  name: string) {
    try {
      const companies = this.httpClient.get<ICompanyResponse>(
        `company?page=${page}&size=${size}&name=${name}`
      );
      return companies;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllCompanies(){
    try{
        const companies = this.httpClient.get<IContentCompany[]>("company/all");
        return companies
    }catch(error){
        console.log(error);
        throw error;
    }
}
  async findById(id: string) {
    try {
      const companies = this.httpClient.get<IContentCompany>(`company/${id}`);
      return companies;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(body: IPostCompany) {
    try {
      const companies = this.httpClient.post<IContentCompany, IPostCompany>(
        "company",
        body
      );
      return companies;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id: string, body: IPostCompany) {
    try {
      const companies = this.httpClient.put<IContentCompany, IPostCompany>(`company/${id}`, body)
      return companies
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async destroy(id: string) {
    try {
      const companies = this.httpClient.delete<ICompanyResponse>(
        `company/${id}`
      );
      return companies;
    } catch (error) {
      console.log('Service Error: Destroy:', error);
      throw error;
    }
  }
}

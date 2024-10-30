export interface IVacancyResponse {
  content:          IContentVacancy[];
  pageable:         Pageable;
  totalPages:       number;
  totalElements:    number;
  last:             boolean;
  numberOfElements: number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  empty:            boolean;
}

export interface IContentVacancy {
  id:          number;
  title:       string;
  description: string;
  status:      string;
  company:     Company;
}

export interface Company {
  id:       string;
  name:     string;
  location: string;
  contact:  string;
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  sorted:   boolean;
  unsorted: boolean;
  empty:    boolean;
}

export interface IPostVacancy {
  title: string;
  description: string;
  status: string;
  companyId: string;
}

export interface IPostVacancyResponse {
  id: number,
  title: string,
  description: string,
  status: string,
  company: {
      id: string,
      name: string,
      location: string,
      contact: string
  }
}

export interface IPostVacancy {
    title: string;
    description: string;
    status: string;
    companyId: string
}


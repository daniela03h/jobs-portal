export interface ICompanyResponse {
  content:          IContentCompany[];
  pageable:         IPageable;
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

export interface IContentCompany {
  id:       string;
  name:     string;
  location: string;
  contact:  string;
  vacants:  Vacant[];
}

export interface Vacant {
  id:          number;
  title:       string;
  description: string;
  status:      string;
}

export interface IPageable {
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

export interface IPostCompany {
  name: string;
  location: string;
  contact: string;
}
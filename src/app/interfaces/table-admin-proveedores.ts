import {Pageable} from './forms/tratamiento-data';

export interface TableAdminProveedores {
  content: RowAdminProveedores[];
  number: number;
  size: number;
  totalElements: number;
  pageable?: Pageable;
}

export  interface RowAdminProveedores {
  id: number;
  companyUser: {
    idUser: number;
    name1: string;
    lastName1: string;
    name2: string;
    lastName2: string;
    identification: string;
    email: string;
    status: string,
    userId: number;
  };
  companyName: string;
  city: {
    description: string;
  };
  department: {
    description: string;
  };
}

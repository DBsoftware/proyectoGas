import {Pageable} from './forms/tratamiento-data';

export interface DataAccountProveedores {
  totalElements: number;
  number: number;
  size: number;
  pageable?: Pageable;
  content: RowDataAccountProveedores[];
}
export interface RowDataAccountProveedores {
  active: boolean;
  companyName: string;
  nit: string;
  address: string;
}

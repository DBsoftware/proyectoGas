import {Pageable} from './forms/tratamiento-data';

export interface RecaudadoresData {
  content: RowRecaudadoresData[];
  pageable: Pageable;
  number: number;
  size: number;
  totalElements: number;
}

export interface RowRecaudadoresData {
  id: number;
  description: string;
  address: string;
  phoneNumber: string;
  latitude: string;
  pathImg: string;
  longitude: string;
  status: string;
  createdAt: string;
  companyId: number;
  categoryId: number;
  divpolaId: number;
}

import {Pageable} from './forms/tratamiento-data';

export interface FrecuenciaRecoleccion {
  content: RowRecoleccion[];
  pageable: Pageable;
  number: number;
  size: number;
  totalElements: number;
}

export interface RowRecoleccion {
  id: number;
  subscriptionCode: string;
  frequency: string;
  latitude: number;
  longitude: number;
  status: string;
  createdAt: string;
  companyId: number;
  processId: number;
}

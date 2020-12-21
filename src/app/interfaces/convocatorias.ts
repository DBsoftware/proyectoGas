import {Pageable} from './forms/tratamiento-data';

export interface ConvocatoriasTable {
  content: RowConvocatoriasTable[];
  number: number;
  size: number;
  totalElements: number;
  pageable?: Pageable;
}

export interface RowConvocatoriasTable {
  id: number;
  file: {
    id: number;
    fileName: string;
  };
  description: string;
  status: string;
}

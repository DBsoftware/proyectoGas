import {Pageable} from './forms/tratamiento-data';

export interface TableEvaluacion {
  content: RowTableEvaluacion[];
  number: number;
  size: number;
  totalElements: number;
  pageable?: Pageable;
}

export  interface RowTableEvaluacion {
  id: number;
  file: string;
  year: string;
}

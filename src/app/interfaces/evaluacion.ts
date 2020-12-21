import {Pageable} from './forms/tratamiento-data';

export interface EvaluacionTable {
  content: RowEvaluacion[];
  number: number;
  size: number;
  totalElements: number;
  pageable?: Pageable;
}

export interface RowEvaluacion {
  id: number;
  file: {
    id: number;
    fileName: string;
    url: null
  };
  description: string;
  providerId: number;
  year: number;
  date: string;
  status: string;
}


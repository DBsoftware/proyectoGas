import {Pageable} from './forms/tratamiento-data';
import {RowTableEvaluacion} from './table-evaluacion';

export interface LineaEticaTable {
  content: RowTableEtica[];
  number: number;
  size: number;
  totalElements: number;
  pageable?: Pageable;
}


export  interface RowTableEtica {
  id: number;
  novelty: string;
  timeHappen: string;
  companyknowledge: string;
  registerData: string;
}


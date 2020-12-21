import {Pageable} from './forms/tratamiento-data';

export interface ConsultaDeduccionesTable {
  content: RowConsultaDeducciones[];
  number: number;
  size: number;
  totalElements: number;
  pageable?: Pageable;
}

export interface RowConsultaDeducciones {
  descripcion: string;
  valor_base: string;
  deduccion: string;
}

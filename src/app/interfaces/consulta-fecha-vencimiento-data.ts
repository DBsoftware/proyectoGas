import {Pageable} from './forms/tratamiento-data';

export interface ConsultaFechaVencimiento {
  content: ConsultaFechaVencimientoData[];
  pageable: Pageable;
  number: number;
  size: number;
  totalElements: number;

}

export interface ConsultaFechaVencimientoData {
  codigo: number;
  fecha: string;
}

export interface TratamientoData {
    content: RowTratamientoData[];
    first: boolean;
    last: boolean;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    number: number;
    sort: SortTable;
    totalElements: number;
    totalPages: number;
}

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface RowTratamientoData {
  date: string;
  version: string;
  personInCharge: PersonInCharge;
  file: FileTratamiento;
  id: number;
  status: string;
  observation: string;
}

export interface FileTratamiento {
  mimeType: string;
  id: string;
  fileName: string;
}

export interface PersonInCharge {
  fullName: string;
  nombre1: string;
  apellido1: string;
  apelllido2: string;
}

export interface SortTable {
  sorted: boolean;
  unsorted: boolean;
}

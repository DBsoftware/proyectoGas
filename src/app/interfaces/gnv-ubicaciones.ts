import {Pageable} from './forms/tratamiento-data';

export interface GnvUbicaciones {
  totalElements: number;
  number: number;
  size: number;
  pageable?: Pageable;
  content: RowGvnUbicaciones[];
}

export  interface RowGvnUbicaciones {
  id:  number;
  divpolaId: number;
  divpolaDane: {
    id: number;
    code: number;
    description:  string;
    dadId: number;
    level: string;
    status: string;
    createdAt:  string;
  };
  description: string;
  address: string;
  phoneNumber: string;
  imgPath: string;
  latitude: number;
  longitude: number;
  status: string;
  createdAt: string;
  updatedAt: null;
  companyId: number;
}

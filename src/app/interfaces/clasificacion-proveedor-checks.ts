export interface ClasificacionProveedorChecks {
  id: number;
  description: string;
  specialities: SpecialitiesCheckBox[];
}

export interface SpecialitiesCheckBox {
  id: number;
  description: string;
  status: string;
  companyId: number;
}

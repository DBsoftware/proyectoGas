export interface CalculoConsumo {
  id: number;
  code: number;
  description: string;
  consumption: number;
  status: string;
  createdAt: string;
  companyId: number;
  gasodomesticCategoryId: number;
  gasodomesticCategory: {
    id: number;
    description: number;
    createdAt: string;
    status: string;
    companyId: number;
  };
}

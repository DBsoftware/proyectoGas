export interface EvaluacionProveedoresList {
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
  user: {
    nit: number;
    companyName: string;
  };
}

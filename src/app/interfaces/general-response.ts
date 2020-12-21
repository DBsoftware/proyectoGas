export interface GeneralResponse {
  data?;
  message?: string;
  errors?: GeneralErrors[] | null;
}

interface GeneralErrors {
  message: string;
}

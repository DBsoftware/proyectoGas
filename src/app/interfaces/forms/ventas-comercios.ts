export interface VentasComercios {
  formId: number;
  identificationType: string;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  companyName: string;
  useTypeId: number;
  email: string;
  mobile: number;
  phoneNumber: number;
  sendEmailNotification: boolean;
  pieceOfGround: {
    address: string;
    departamentId: number;
    townId: number;
  };
  politicId: number;
  recaptchaToken: string;
}

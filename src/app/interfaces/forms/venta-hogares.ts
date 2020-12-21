export interface VentaHogares {
  formId: number;
  identificationType: string;
  identification: string;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  useTypeId: number;
  email: string;
  mobile: string;
  phoneNumber: string;
  sendEmailNotification: boolean;
  pieceOfGround: {
    address: string;
    departamentId: number;
    townId: number;
  };
  politicId: number;
  recaptchaToken: string;
}

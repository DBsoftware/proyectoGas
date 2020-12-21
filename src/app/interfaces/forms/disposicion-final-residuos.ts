export interface DisposicionFinalResiduos {
  formId: number;
  typeNatureId: number;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  phoneNumber: string;
  mobile: number;
  sendEmailNotification: boolean;
  aditionalInfo: string;
  filesId: Array<number>;
  politicId: number;
  recaptchaToken: string;
}

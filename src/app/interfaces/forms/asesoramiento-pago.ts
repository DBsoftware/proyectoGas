export interface AsesoramientoPago {
  formId: number;
  identificationType: string;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  phoneNumber: string;
  mobile: string;
  sendEmailNotification: boolean;
  observations: string;
  fileIds: Array<number>;
  politicId: number;
  recaptchaToken: string;
}

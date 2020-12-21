
export interface PqrClientes {
  formId: number;
  userSubscriptionCode: string;
  identificationType: string;
  identification: string;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  mobile: string;
  phoneNumber: string;
  email: string;
  emailAux: string;
  emailSender: string;
  observations: string;
  fileIds: Array<number>;
  politicId: number;
  recaptchaToken: string;
}

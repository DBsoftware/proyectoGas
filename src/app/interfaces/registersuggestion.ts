export interface Registersuggestion {
  formId: number;
  identificationType: string;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  phoneNumber: number;
  mobile: number;
  sendEmailNotification: boolean;
  suggestion: string;
  politicId: number;
  recaptchaToken: string;
}

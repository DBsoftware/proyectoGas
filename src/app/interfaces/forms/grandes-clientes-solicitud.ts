export interface GrandesClientesSolicitud {
  formId: number;
  identificationType: string;
  taxIdentification: number;
  companyName: string;
  charge: string;
  name1: string;
  lastName1: string;
  email: string;
  auxEmail: string;
  mobile: number;
  phoneNumber: string;
  typeEnergeticSolutionId: number;
  typeEnergeticSolutionByUser: string;
  sendEmailNotification: boolean;
  politicId: number;
  recaptchaToken: string;
}

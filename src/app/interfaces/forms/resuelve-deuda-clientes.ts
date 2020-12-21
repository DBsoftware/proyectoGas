export interface ResuelveDeudaClientes {
  formId: number;
  userSubscriptionCode: string;
  identificationType: string;
  identification: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  debtAge: string | number;
  debtValue: string | number;
  address: string;
  mobile: string;
  phoneNumber: string;
  proposal: string;
  politicId: number;
  recaptchaToken: string;
}

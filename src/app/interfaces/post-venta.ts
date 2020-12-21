export interface PostVenta {
  formId: number;
  userSubscriptionCode: string;
  identificationType: string;
  identification: number;
  cityId: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  email: string;
  mobile: number;
  phoneNumber: string;
  sendEmailNotification: boolean;
  servicesTypesIds: Array<number>;
  workingDay: string;
  extraData: string;
  personInChargeAuthorizedPhoneNumber: string;
  recommendations: string;
  politicId: number;
  recaptchaToken: string;
}

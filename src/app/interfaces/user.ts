export interface User {
  userId: number;
  identification: number;
  email: string;
  transactionalZone: {
    date: string;
  };
  zoneId: number;
  company: Object;
  companyId: number;
  profile: {
    profileId: number;
    description: string;
    date: string;
    companyId: number;
    profile: string;
    status: string
  };
  profileId: number;
  politicId: number;
  status: string;
  password: string;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  creationDate: string;
}

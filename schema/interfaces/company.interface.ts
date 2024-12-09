import { DefaultModel } from '.';

export interface Company extends DefaultModel {
  companyName: string;
  fullName: string;
  area: string;
  CACNumber: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
}
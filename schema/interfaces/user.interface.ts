import { DefaultModel } from ".";
import { Interests, RoleNames } from "../enums/user.enum";

export interface User extends DefaultModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  bio: string;
  profilePicture: string;
  phoneNumber: string;
  location: string;
  job: string;
  company?: Company;
  interests: Interests[];
  roles: RoleNames[];
}

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

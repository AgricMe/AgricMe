import { Interests, RoleNames } from "../enums/user.enum";
import { Company } from "../interfaces/user.interface";

export type EditProfileDTO = Partial<{
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  profilePicture?: string;
  bio: string;
  phoneNumber: string;
  location: string;
  job: string;
  company?: Company;
  interests: Interests[];
  roles: RoleNames[];
}>;

export type EditCompanyProfileDTO = Partial<{
  _id: string;
  companyName: string;
  fullName: string;
  area: string;
  CACNumber: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
}>;

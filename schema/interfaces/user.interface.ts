import { DefaultModel } from ".";
import { Interests, RoleNames, VerificationStatus } from "../enums/user.enum";
import { Company } from './company.interface';
import { Preference } from './preference.interface';

export interface User extends DefaultModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  bio: string;
  profilePicture: string;
  coverPhoto: string;
  phoneNumber: string;
  location: string;
  address: string;
  zipCode: string;
  job: string;
  verificationStatus: VerificationStatus;
  company?: Company;
  preference: Preference;
  interests: Interests[];
  roles: RoleNames[];
}

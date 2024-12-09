import { Interests, RoleNames, VerificationStatus } from "../enums/user.enum";
import { Company } from "../interfaces/company.interface";
import { Preference } from '../interfaces/preference.interface';

export type EditProfileDTO = Partial<{
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  profilePicture?: string;
  coverPhoto?: string;
  bio: string;
  phoneNumber: string;
  location: string;
  address: string;
  zipCode: string;
  job: string;
  company?: Company;
  preference: Preference;
  verificationStatus: VerificationStatus;
  interests: Interests[];
  roles: RoleNames[];
}>;
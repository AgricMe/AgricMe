import { DefaultModel } from '.';
import { UserRoles } from '../enums/user.enum';

export interface User extends DefaultModel {
  email: string;
  fullName: string;
  userName: string;
  profileImage: string;
  country: string;
  cityOfResidence: string;
  phoneNumber: string;
  birthday: string;
  role: UserRoles;
}

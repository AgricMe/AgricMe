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
  interests: Interests[];
  roles: RoleNames[];
}

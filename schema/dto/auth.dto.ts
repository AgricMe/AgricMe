import { Interests, RoleNames } from "../enums/user.enum";

export interface SignUpDTO {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  bio: string;
  phoneNumber: string;
  location: string;
  job: string;
  interest: Interests[];
  role: RoleNames[];
}

// export interface VerifyAccountDTO {
//   otp: string;
//   email: string;
// }

export interface LoginDTO {
  email: string;
  password: string;
}
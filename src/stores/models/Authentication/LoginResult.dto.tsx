import { User } from "../User/User.dto";

export interface LoginResult {
  expiresIn: string;
  accessToken: string;
  refreshExpiresIn: string;
  refreshAccessToken: string;
  user: User;
}

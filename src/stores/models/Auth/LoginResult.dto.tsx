import { UserInDbDto } from "../User/UserInDb.dto";

export interface LoginResult {
  expiresIn: string;
  accessToken: string;
  refreshExpiresIn: string;
  refreshAccessToken: string;
  user: UserInDbDto;
}

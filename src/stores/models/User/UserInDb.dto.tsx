import { RegisteredType } from "./registeredType.enum";
import { Role } from "./role.enum";

export interface UserInDbDto {
  id: string;
  usernameOrEmail: string;
  name: string;
  type: RegisteredType;
  photo: string;
  roles: Role[];
}

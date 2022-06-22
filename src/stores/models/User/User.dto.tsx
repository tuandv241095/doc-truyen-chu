import { Role } from "../enum/role.enum";

export interface User {
  id: string;

  name: string;

  username: string;

  email: string;

  role: Role;
}

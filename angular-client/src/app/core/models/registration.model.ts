import { UserRole } from "./user-role.enum";

export interface RegistrationModel {
    userName: string;
    password: string;
    email: string;
    role: UserRole;
}
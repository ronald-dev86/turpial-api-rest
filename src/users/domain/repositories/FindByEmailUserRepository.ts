import { User } from "../models/users";

export interface FindByEmailUserRepository {
    handle(email: string): Promise<User[]>;
}
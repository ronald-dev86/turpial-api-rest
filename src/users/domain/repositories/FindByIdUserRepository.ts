import { User } from "../models/users";

export interface FindByIdUserRepository {
    handle(id: string): Promise<User[]>;
}
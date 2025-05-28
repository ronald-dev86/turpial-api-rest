import { User } from "../models/users";

export interface FindAllUserRepository {
    handle(): Promise<User[]>;
}
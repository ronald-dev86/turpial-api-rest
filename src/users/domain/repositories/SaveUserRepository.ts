import { User } from "../models/users";

export interface SaveUserRepository {
    handle(user:User):void;
}
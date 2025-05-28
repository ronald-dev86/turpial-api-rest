import { User } from "../models/users";

export interface UpdateUserRepository {
    handle(id:string , user:User):Promise<void>
}
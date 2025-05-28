import { Auth } from "../model/Auth";

export interface FindByIdUserAuthRepository {
    handle(idUser: string): Promise<Auth[]>
}   
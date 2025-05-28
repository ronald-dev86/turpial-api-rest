import { Auth } from "../model/Auth";

export interface FindByUserIdAndTokenAuthRepository {
    handle(idUser: string, token:string): Promise<Auth[]>
}
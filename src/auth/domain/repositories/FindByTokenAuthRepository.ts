import { Auth } from "../model/Auth";

export interface FindByTokenAuthRepository {
    handle(token: string): Promise<Auth[]>
}
import { Auth } from "../model/Auth";

export interface UpdateAuthRepository {
    handle(auth: Auth): Promise<void>
}
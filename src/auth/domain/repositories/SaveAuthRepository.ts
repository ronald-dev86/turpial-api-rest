import { Auth } from "../model/Auth";

export interface SaveAuthRepository {
    handle(auth: Auth): Promise<void>;
}
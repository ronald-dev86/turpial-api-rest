import { LogoutService } from "../services/LogoutService";

export class LogoutUseCase{
    constructor(private logoutService:LogoutService){}

    async execute(idUser: string) : Promise<any> {
        return await this.logoutService.logout(idUser);
    }
}
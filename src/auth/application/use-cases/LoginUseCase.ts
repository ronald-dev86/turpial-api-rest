import { LoginDTO } from "../dto/login.dto";
import { LoginService } from "../services/LoginService";

export class loginUseCase {
    constructor( private loginService: LoginService) {}

    async execute(access:LoginDTO): Promise<any> {
        return await this.loginService.login( access);
    }
}
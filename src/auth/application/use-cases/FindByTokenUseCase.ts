import { FindByTokenService } from "../services/FindByTokenService";

export class FindByTokenUseCase {
    constructor(private findByTokenService: FindByTokenService) {}

    async execute(token: string): Promise<any> {
        return await this.findByTokenService.getToken(token);
    }
}
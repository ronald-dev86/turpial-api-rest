import { FindByTokenAuthColletionFirebase } from "../../infrastruture/persistences/FindByTokenAuthColletionFirebase";

export class FindByTokenService {
    constructor(
        private findByTokenRepository:FindByTokenAuthColletionFirebase
    ) {}

    async getToken(token: string): Promise<any> {
        const auth = await this.findByTokenRepository.handle(token);
       
        if (auth.length === 0) return {
            success: false,
            message: 'Token not found',
            status: 401
        }
        
        return {
            success: true,
            message: 'Token retrieved successfully',
            status: 200,
            data: auth
        };
    }
}
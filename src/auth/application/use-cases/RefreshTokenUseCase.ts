import { RefreshTokenDTO } from "../dto/RefreshToken.dto";
import { RefreshTokenService } from "../services/RefreshTokenService";

export class RefreshTokenUseCase {
    constructor(private refreshTokenService: RefreshTokenService) {}
    async execute(payload:RefreshTokenDTO): Promise<any> {
        return await this.refreshTokenService.refreshToken(payload)
    }
}
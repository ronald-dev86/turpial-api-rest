import {  Request, Response } from 'express';
import { RefreshTokenUseCase } from '../../application/use-cases/RefreshTokenUseCase';
import { RefreshTokenService } from '../../application/services/RefreshTokenService';
import { TokenOperator } from '../../../shared/json-web-token/TokenOperator';
import { FindUserByIdColletionFirebase } from '../../../users/infrastructure/pesistences/FindUserByIdColletionFirebase';
import { RefreshTokenDTO } from '../../application/dto/RefreshToken.dto';
import { FindByUserIdAndTokenAuthCollectionFirebase } from '../persistences/FindByUserIdAndTokenAuthColletionFirebase';
import { UpdateAuthCollectionFirebase } from '../persistences/UpdateAuthColletionFirebase';

export class RefreshTokenController {
    private refreshTokenUseCase: RefreshTokenUseCase; // Replace with actual type when available
    constructor() {
        const findByUserIdAndTokenAuthRepository = new FindByUserIdAndTokenAuthCollectionFirebase()
        const updateAuthRepository = new UpdateAuthCollectionFirebase()
        const findByIdUserRepository = new FindUserByIdColletionFirebase()
        const tokenOperator =  new TokenOperator()
        const refreshTokenService = new RefreshTokenService(
            findByUserIdAndTokenAuthRepository,
            updateAuthRepository,
            findByIdUserRepository,
            tokenOperator); 
        this.refreshTokenUseCase = new RefreshTokenUseCase(refreshTokenService);
        this.run = this.run.bind(this);
    }

    async run (req: Request, res: Response) {
        try {
            const payload = req.body as RefreshTokenDTO;
            if (!payload.token || !payload.idUser) {
                return res.status(400).json({ message: 'Token and userId are required' });
            }
            const done = await this.refreshTokenUseCase.execute(payload)
            res.status(done.status).json(done);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }

    }
}
import { Request, Response } from "express";
import { FindByTokenUseCase } from "../../application/use-cases/FindByTokenUseCase";
import { FindByTokenService } from "../../application/services/FindByTokenService";
import { FindByTokenAuthColletionFirebase } from "../persistences/FindByTokenAuthColletionFirebase";

export class FindByTokenController {
    private findByTokenUseCase: FindByTokenUseCase
    constructor() {
        const findByTokenRepository = new FindByTokenAuthColletionFirebase();
        const findByTokenService = new FindByTokenService( findByTokenRepository);
        this.findByTokenUseCase = new FindByTokenUseCase(findByTokenService);
        this.run = this.run.bind(this);
    }
    async run(req: Request, res: Response) {
       try {
            const token = req.headers.authorization?.split(' ')[1]  ;
            const done = await this.findByTokenUseCase.execute(token as string);
            res.status(done.status).json(done);
        
       } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
       }
    }
}
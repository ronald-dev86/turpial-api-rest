import { NextFunction, Request, Response } from "express";
import { loginUseCase } from "../../application/use-cases/LoginUseCase";
import { FindUserByEmailColletionFirestore } from "../../../users/infrastructure/pesistences/FindUserByEmailColletionFirestore";
import { LoginService } from "../../application/services/LoginService";
import { LoginDTO } from "../../application/dto/login.dto";
import { KeyOperator } from "../../../shared/key-operator/KeyOperator";
import { TokenOperator } from "../../../shared/json-web-token/TokenOperator";
import { SaveAuthCollectionFirebase } from "../persistences/SaveAuthColletionFirebase";

export class LoginController {

    private loginUseCase: loginUseCase    
    constructor() {
        const findByEmailUserRepository = new FindUserByEmailColletionFirestore();
        const saveAuthCollectionFirebase = new SaveAuthCollectionFirebase();
        const keyOperator = new KeyOperator();
        const tokenOperator = new TokenOperator();
        const loginService = new LoginService(findByEmailUserRepository, saveAuthCollectionFirebase, keyOperator, tokenOperator);
        this.loginUseCase = new loginUseCase(loginService);
        
        this.run = this.run.bind(this);
    }
    async run(req: Request, res: Response) {
        try {
            const access = req.body as LoginDTO;
            if (!access.email) {
                return res.status(400).json({ message: 'Email  are required' });
            }
            const done = await this.loginUseCase.execute(access)
            res.status(done.status).json(done); 
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }
    }
}
import {  Request, Response } from 'express';
import { SaveUserCollectionFirestore } from '../pesistences/SaveUserColletionFirestore';
import { SaveUserUseCase } from '../../application/use-cases/SaveUserUseCase';
import { SaveUserService } from '../../application/services/SaveUserService';
import { CreateUserDTO } from '../../application/dto/createUser.dto';
import { KeyOperator } from '../../../shared/key-operator/KeyOperator';
import { FindUserByEmailColletionFirestore } from '../pesistences/FindUserByEmailColletionFirestore';

export class SaveUserController {
    private saveUserUseCase: SaveUserUseCase;
    constructor() {
        const saveUserRepository = new SaveUserCollectionFirestore();
        const findByEmailRepository =  new FindUserByEmailColletionFirestore()
        const keyOperator = new KeyOperator();
        const saveUserService = new SaveUserService(saveUserRepository, findByEmailRepository, keyOperator);
        this.saveUserUseCase = new SaveUserUseCase(saveUserService);

        // Enlazar el método al contexto de la clase
        this.run = this.run.bind(this);


    }

    async run(req: Request, res: Response) {
        try {
            const playload: CreateUserDTO = req.body
            const done = await this.saveUserUseCase.execute(playload)
            res.status(done.status).json(done)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}
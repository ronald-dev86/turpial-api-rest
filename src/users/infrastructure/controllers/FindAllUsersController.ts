import { NextFunction, Request, Response } from 'express';
import { FindAllUserColletionFirestore } from '../pesistences/FindAllUserColletionFirestore';
import { FindAllUsersUseCase } from '../../application/use-cases/FindAllUsersUseCase';
import { FindAllUserService } from '../../application/services/FindAllUserService';

export class FindAllUsersController {
    private findAllUsersUseCase: FindAllUsersUseCase;
    constructor() {
        const inscripcionRepository = new FindAllUserColletionFirestore();
        const findAllUserService = new FindAllUserService(inscripcionRepository);
        this.findAllUsersUseCase = new FindAllUsersUseCase(findAllUserService);

        // Enlazar el método al contexto de la clase
        this.run = this.run.bind(this);


    }

    async  run(req: Request, res: Response, next: NextFunction) {
        try {
            const done = await this.findAllUsersUseCase.execute()
            res.status(done.status).json(done)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}
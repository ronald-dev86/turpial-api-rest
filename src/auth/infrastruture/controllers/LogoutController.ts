import { Request, Response } from "express";
import { LogoutUseCase } from "../../application/use-cases/LogoutUseCase";
import { LogoutService } from "../../application/services/LogoutService";
import { FindByIdUserAuthCollectionFirebase } from "../persistences/FindByIdUserAuthColletionFirebase";
import { DeleteAuthCollectionFirebase } from "../persistences/DeleteAuthColletionFirebase";
export class LogoutController {
    private logoutUseCase : LogoutUseCase
    constructor(){
        const findByIdUserAuthRepository = new FindByIdUserAuthCollectionFirebase();
        const deleteAuthRepository =  new DeleteAuthCollectionFirebase()
        const logoutService = new LogoutService(findByIdUserAuthRepository, deleteAuthRepository );
        this.logoutUseCase = new LogoutUseCase(logoutService);
        this.run = this.run.bind(this);
    }

    async run (req: Request, res: Response) {
        try {
            const {idUser} = req.body;
            const done = await this.logoutUseCase.execute(idUser)
            res.status(done.status).json(done);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
import { Request, Response } from "express";
import { DeleteUserService } from "../../application/services/DeleteUserService";
import { DeleteUserUseCase } from "../../application/use-cases/DeleteUserUseCase";
import { DeleteUserColletionFirestore } from "../pesistences/DeleteUserColletionFirestore";

export class DeleteUserController {
    private deleteUserUseCase: DeleteUserUseCase;
    constructor(){
        const deleteByIDUserRepository = new DeleteUserColletionFirestore();
        const deleteUserService = new DeleteUserService(deleteByIDUserRepository)
        this.deleteUserUseCase = new DeleteUserUseCase(deleteUserService);
        // Enlazar el método al contexto de la clase
        this.run = this.run.bind(this);
    }
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const done = await this.deleteUserUseCase.execute(id);
            res.status(done.status).json(done)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal Server Error' })
            
        }
    }
}
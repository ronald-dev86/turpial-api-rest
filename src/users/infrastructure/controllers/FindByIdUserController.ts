import { Request, Response } from "express";
import { FindByIdUserUseCase } from "../../application/use-cases/FindByIdUserUseCase";
import { FindByIdUserService } from "../../application/services/FindByIdUserService";
import { FindUserByIdColletionFirebase } from "../pesistences/FindUserByIdColletionFirebase";

export class FindByIdUserController {
    private findByIdUserUseCase:FindByIdUserUseCase
    constructor() {
        const findByIdUserRepository = new FindUserByIdColletionFirebase();
        const findByIdUserService = new FindByIdUserService(findByIdUserRepository)
        this.findByIdUserUseCase = new FindByIdUserUseCase(findByIdUserService);
    }
    async run(req: Request, res:Response) {
        try {
            const id = req.params.id as string;
            const done = await this.findByIdUserUseCase.execute(id);
            res.status(done.status).json(done);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
import { Request, Response } from "express";
import { UpdateUserService } from "../../application/services/UpdateUserService";
import { UpdateUserUseCase } from "../../application/use-cases/UpdateUserUseCase";
import { FindUserByIdColletionFirebase } from "../pesistences/FindUserByIdColletionFirebase";
import { UpdateUserColletionFirebase } from "../pesistences/UpdateUserColletionFirebase";
import { UpdateUserDTO } from "../../application/dto/UpdateUser.dto";
import { KeyOperator } from "../../../shared/key-operator/KeyOperator";

export class UpdateUserController {
    private updateUserUseCase: UpdateUserUseCase
    constructor() {
        const updateUserRepository =  new UpdateUserColletionFirebase()
        const findUserByIdRepository = new FindUserByIdColletionFirebase()
        const keyOperator = new KeyOperator()
        const updateUserService = new UpdateUserService(updateUserRepository, findUserByIdRepository, keyOperator)
        this.updateUserUseCase = new UpdateUserUseCase(updateUserService)

        // Enlazar el método al contexto de la clase
        this.run = this.run.bind(this);
    }

    async run(req: Request, res:Response): Promise<any> {
        try {
            
            const payload = req.body as UpdateUserDTO;
            const id = req.params.id as string;
            const done = await this.updateUserUseCase.execute(id, payload);
            res.status(done.status).json(done);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
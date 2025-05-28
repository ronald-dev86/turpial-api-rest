import { Request, Response } from "express";
import { FindAllTaskByIdUserService } from "../../application/service/FindAllTaskByIdUserService";
import { FindAllTaskByIdUserUseCase } from "../../application/use-case/FindAllTaskByIdUserUseCase";
import { FindAllTaskByIdUserColletionFirebase } from "../persistences/FindAllTaskByIdUserColletionFirebase";


export class FindAllTaskByIdUserController {
    findAllTaskByIdUserUseCase: FindAllTaskByIdUserUseCase
   constructor() {
    const findAllTaskByIdUserRepository =  new FindAllTaskByIdUserColletionFirebase()
    const findAllTaskByIdUserService =  new FindAllTaskByIdUserService(findAllTaskByIdUserRepository)
    this.findAllTaskByIdUserUseCase = new FindAllTaskByIdUserUseCase(findAllTaskByIdUserService);
    this.run = this.run.bind(this);
   }

   async run(req: Request, res: Response) {
    try {
        const id = req.params.id as string;
        const done = await this.findAllTaskByIdUserUseCase.execute(id);
        res.status(done.status).json(done);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
   }
   
}
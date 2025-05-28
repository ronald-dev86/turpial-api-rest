import { Request, Response } from "express"
import { FindTaskByIdService } from "../../application/service/findTaskByIdService"
import { FindTaskByIdUseCase } from "../../application/use-case/findTaskByIdRepository"
import { FindTaskByIdColletionFirebase } from "../persistences/FindTaskByIdColletionFirebase"

export class  FindTaskByIdController  {
        findTaskByIdUseCase:FindTaskByIdUseCase
       constructor(){
        const findTaskByIdRepository =  new FindTaskByIdColletionFirebase()
        const findTaskByIdService =  new FindTaskByIdService(findTaskByIdRepository)
        this.findTaskByIdUseCase =  new FindTaskByIdUseCase(findTaskByIdService)
        this.run = this.run.bind(this);
       }

       async run (req:Request, resp: Response) {
        try {
            const { id } = req.params ;
            const done = await this.findTaskByIdUseCase.execute(id);
            resp.status(done.status).json(done);
        } catch (error) {
            console.error(error);
            resp.status(500).json({ message: "Internal Server Error" });
        }
       }
}
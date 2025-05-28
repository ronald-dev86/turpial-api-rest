import { Request, Response } from "express";
import { DeleteTaskService } from "../../application/service/DeleteTaskService";
import { DeleteTaskUseCase } from "../../application/use-case/DeleteTaskUseCase";
import { DeleteTaskColletionFirebase } from "../persistences/DeleteTaskColletionFirebase";


export class DeleteTaskController{

    deleteTaskUseCase: DeleteTaskUseCase;

    constructor() {
        const deleteTaskRepository =  new DeleteTaskColletionFirebase()
        const deleteTaskService = new DeleteTaskService(deleteTaskRepository);
        this.deleteTaskUseCase = new DeleteTaskUseCase(deleteTaskService);
        this.run = this.run.bind(this);
    }

    async run (req:Request, res:Response){
        const { id } = req.params;
        try {
            const done = await this.deleteTaskUseCase.execute(id);
            res.status(done.status).json(done);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    
}
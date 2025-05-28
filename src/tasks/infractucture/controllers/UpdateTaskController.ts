import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../../application/use-case/UpdateTaskRepository";
import { UpdateTaskColletionFirebase } from "../persistences/UpdateTaskColletionFirebase";
import { UpdateTaskService } from "../../application/service/UpdateTaskService";
import { FindTaskByIdColletionFirebase } from "../persistences/FindTaskByIdColletionFirebase";
import { UpdateTaskDto } from "../../application/dto/UpdateTask.dto";

export class UpdateTaskController {

    updateTaskUseCase:UpdateTaskUseCase
    constructor() { 
        const updateTaskRepository = new UpdateTaskColletionFirebase();
        const findTaskByIdRepository= new FindTaskByIdColletionFirebase();
        const updateTaskService = new UpdateTaskService(findTaskByIdRepository, updateTaskRepository);
        this.updateTaskUseCase = new UpdateTaskUseCase(updateTaskService);   

        this.run = this.run.bind(this);
    }
  async run (req:Request, res:Response){
    const payload = req.body as UpdateTaskDto;
    const { id } = req.params;
    try {
        const done = await this.updateTaskUseCase.execute(payload, id);
        res.status(done.status).json(done);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
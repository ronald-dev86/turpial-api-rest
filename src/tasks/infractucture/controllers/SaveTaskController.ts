import { CreateTaskDto } from "../../application/dto/CreateTask.dto";
import { SaveTaskService } from "../../application/service/SaveTaskService";
import { SaveTaskUseCase } from "../../application/use-case/SaveTaskRepository";
import { SaveTaskColletionFirebase } from "../persistences/SaveTaskColletionFirebase";


export class SaveTaskController {
    saveTaskUseCase:SaveTaskUseCase
   constructor() {
        const saveTaskRepository =  new SaveTaskColletionFirebase()
        const saveTaskService = new SaveTaskService(saveTaskRepository)
        this.saveTaskUseCase = new SaveTaskUseCase(saveTaskService);
        this.run = this.run.bind(this);
   }

   async run(req: any, res: any) {
        const payload = req.body as CreateTaskDto;
        try {
            const done = await this.saveTaskUseCase.execute(payload);
            res.status(done.status).json(done);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
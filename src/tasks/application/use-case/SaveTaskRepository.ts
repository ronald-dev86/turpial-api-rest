import { CreateTaskDto } from "../dto/CreateTask.dto";
import { SaveTaskService } from "../service/SaveTaskService";


export class SaveTaskUseCase {
    constructor(private saveTaskService: SaveTaskService) {}

    async execute(payload: CreateTaskDto): Promise<any> {
        return await this.saveTaskService.run(payload);
    }
   
}
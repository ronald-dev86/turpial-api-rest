import { UpdateTaskDto } from "../dto/UpdateTask.dto";import { UpdateTaskService } from "../service/UpdateTaskService";
;


export class UpdateTaskUseCase {
    constructor(private updateTaskService: UpdateTaskService) {}
    async execute(payload: UpdateTaskDto, id: string): Promise<any> {
        return await this.updateTaskService.run(payload, id);
    }
}
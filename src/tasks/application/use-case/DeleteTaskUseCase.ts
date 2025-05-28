import { DeleteTaskService } from "../service/DeleteTaskService";

export  class DeleteTaskUseCase {
    constructor(private deleteTaskService: DeleteTaskService) {}
    async execute(id: string): Promise<any> {
        return await this.deleteTaskService.run(id);
    }
}
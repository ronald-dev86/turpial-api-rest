
import { FindTaskByIdColletionFirebase } from "../../infractucture/persistences/FindTaskByIdColletionFirebase";

export class FindTaskByIdService  {

    constructor(private findTaskByIdRepository: FindTaskByIdColletionFirebase) {}
    
    async run(id: string): Promise<any> {
        const task = await this.findTaskByIdRepository.handle(id);

        if (!task) return {
            success: false,
            message: 'Task not found',
            status: 404,
            data: []
        };

        return {
            success: true,
            message: 'Task retrieved successfully',
            status: 200,
            data: task
        };
    }
}
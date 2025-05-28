import { FindAllTaskByIdUserColletionFirebase } from "../../infractucture/persistences/FindAllTaskByIdUserColletionFirebase";

export class FindAllTaskByIdUserService {

    constructor(private findAllTaskByIdUserRepository: FindAllTaskByIdUserColletionFirebase) {}
    async run(id: string): Promise<any> {
        const tasks = await this.findAllTaskByIdUserRepository.handle(id);

        if (tasks.length === 0) return {
                success: true,
                message: 'No tasks found for this user',
                status: 200,
                data: []
            };
        

        return {
            success: true,
            message: 'Tasks retrieved successfully',
            status: 200,
            data: tasks
        };
    }
}
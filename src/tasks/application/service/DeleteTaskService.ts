import { DeleteTaskColletionFirebase } from "../../infractucture/persistences/DeleteTaskColletionFirebase";

export class DeleteTaskService  {
    constructor( private deleteTaskRepository: DeleteTaskColletionFirebase) {}
    async run(id: string): Promise<any> {
        await this.deleteTaskRepository.handle(id)
        return {
            success: true,
            message: 'Task successfully deleted',
            status: 200
        };
    }
    
}
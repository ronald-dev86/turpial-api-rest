import { Task } from "../../domain/model/Task";
import { FindTaskByIdColletionFirebase } from "../../infractucture/persistences/FindTaskByIdColletionFirebase";
import { UpdateTaskColletionFirebase } from "../../infractucture/persistences/UpdateTaskColletionFirebase";
import { UpdateTaskDto } from "../dto/UpdateTask.dto";



export class UpdateTaskService {
    constructor(
        private findTaskByIdRepository: FindTaskByIdColletionFirebase,
        private updateTaskRepository: UpdateTaskColletionFirebase) {}

    async run(payload: UpdateTaskDto, id: string): Promise<any> {
        const taskResult = await this.findTaskByIdRepository.handle(id);
        const task = Array.isArray(taskResult) ? taskResult[0] : taskResult;
        if (!task) return {
            success: false,
            message: 'Task not found',
            status: 404,
            data: []
        };

        const payloadToUpdate = new Task(
            task.id,
            task.idUser,
            payload.title || task.title,
            payload.description || task.description,
            payload.status || task.status,
            new Date(task.createdAt),
            new Date(),
            task.active)

    
        await this.updateTaskRepository.handle(payloadToUpdate, id);


        return {
            success: true,
            message: 'Task updated successfully',
            status: 200,
        };
    }
}
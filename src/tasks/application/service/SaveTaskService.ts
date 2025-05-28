import { Task } from "../../domain/model/Task";
import { SaveTaskColletionFirebase } from "../../infractucture/persistences/SaveTaskColletionFirebase";
import { CreateTaskDto } from "../dto/CreateTask.dto";
import { v4 as uuidv4 } from 'uuid';


export class SaveTaskService {

    constructor(private saveTaskRepository: SaveTaskColletionFirebase) {}


    async run(payload: CreateTaskDto): Promise<any> {
        const task =  new Task(
            uuidv4(),
            payload.idUser,
            payload.title,
            payload.description,
            payload.status,
            new Date(),
            new Date(),
            true
        );
        await this.saveTaskRepository.handle(task);
        return {
            success: true,
            message: 'Task created successfully',
            status: 201,
        }
    }
}
import { Task } from "../model/Task";


export interface UpdateTaskRepository {
    handle(payload: Task, id: string): Promise<void>
}
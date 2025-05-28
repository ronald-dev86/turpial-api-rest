import { Task } from "../model/Task";

export interface FindAllTaskByIdUserRepository {
    handle(idClient: string): Promise<Task[]>;
}
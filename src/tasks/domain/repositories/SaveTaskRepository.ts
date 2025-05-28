import { Task } from "../model/Task";

export interface SaveTaskRepository {
    handle(payload: Task): Promise<void>;
}
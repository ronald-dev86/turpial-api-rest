import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { SaveTaskRepository } from "../../domain/repositories/SaveTaskRepository";
import { Task } from "../../domain/model/Task";

export class SaveTaskColletionFirebase extends CollectionFirebase implements SaveTaskRepository {
    constructor() {
        super('task');
    }
    async handle(payload: Task): Promise<void>{
        try {
            await this.collection.doc(payload.id).set({... payload}); 
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Error fetching users');
        }
    }
}